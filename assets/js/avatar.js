/*
  Knight avatar interaction engine.
  A persistent corner knight that dashes to whatever you click and either melee-
  attacks it or casts a fireball at it; impact triggers an explosion and then fires
  the link. Click the knight himself for a random defensive reaction; 5 clicks and
  he dies, then respawns after 1s behind an explosion. Sprites by Kin Ng.

  Bypasses (never gate the click): prefers-reduced-motion, < 760px, modifier/middle
  clicks. Pop-up-blocker safe for new-tab links. State resets on pageshow (bfcache).
*/
(function () {
  var el = document.getElementById('pix-avatar');
  var frame = document.getElementById('pix-frame');
  var fxLayer = document.getElementById('pix-fx');
  var fxBack = document.getElementById('pix-fx-back');
  var hitbox = document.getElementById('pix-hitbox');
  if (!el || !frame || !fxLayer || !fxBack || !hitbox) return;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || window.innerWidth < 760) return;

  var base = el.getAttribute('data-sprites') || '/assets/sprites/';
  var KDIR = base + 'knight/';
  var FDIR = base + 'fx/';
  var W = 300, H = 150;
  var LINK_DELAY = 270;       // ms the explosion plays before the link fires
  var DEATH_CLICKS = 5;       // clicks on the knight before he dies
  var REACTIONS = ['block', 'hurt', 'dizzy'];

  var ANIM = {
    idle:       { pre: 'Knight_idle_',       n: 6, fps: 8,  loop: true },
    dash:       { pre: 'Knight_dash_',       n: 3, fps: 12, loop: true },
    attack:     { pre: 'Knight_attack_',     n: 6, fps: 15, loop: false },
    strike:     { pre: 'Knight_strike_',     n: 3, fps: 14, loop: false },
    jumpAttack: { pre: 'Knight_jumpAttack_', n: 6, fps: 15, loop: false },
    cast:       { pre: 'Knight_cast_',       n: 5, fps: 12, loop: false },
    block:      { pre: 'Knight_block_',      n: 4, fps: 14, loop: false },
    hurt:       { pre: 'Knight_hurt_',       n: 2, fps: 10, loop: false },
    dizzy:      { pre: 'Knight_dizzy_',      n: 3, fps: 8,  loop: false },
    die:        { pre: 'Knight_die_',        n: 8, fps: 12, loop: false }
  };
  var FX = {
    dashwind:  { pre: 'dashwind_',  n: 6, fps: 20, w: 120, h: 36 },
    explosion: { pre: 'explosion_', n: 6, fps: 22, w: 132, h: 98 },
    fireball:  { pre: 'fireball_',  n: 3, fps: 16, w: 80,  h: 44 }
  };

  function pad2(n) { return n < 10 ? '0' + n : '' + n; }

  function play(img, dir, def, loop, onEnd) {
    var i = 0, step = 1000 / def.fps, acc = 0, last = null, stopped = false;
    img.src = dir + def.pre + pad2(1) + '.png';
    function tick(ts) {
      if (stopped) return;
      if (last === null) last = ts;
      acc += ts - last; last = ts;
      while (acc >= step) {
        acc -= step; i++;
        if (i >= def.n) {
          if (loop) { i = 0; }
          else { stopped = true; if (onEnd) onEnd(); return; }
        }
        img.src = dir + def.pre + pad2(i + 1) + '.png';
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    return { stop: function () { stopped = true; } };
  }

  var knightAnim = null;
  function playKnight(name, onEnd) {
    if (knightAnim) knightAnim.stop();
    var a = ANIM[name];
    knightAnim = play(frame, KDIR, a, a.loop, onEnd);
  }

  var pos = { x: 0, y: 0 };
  var home = { x: 0, y: 0 };
  var raf = null, busy = false, bypass = false, facingLeft = true, dashTimer = null;
  var clicks = 0, dead = false;
  var enabled = !document.documentElement.classList.contains('knight-off');

  function place() { el.style.transform = 'translate(' + pos.x + 'px,' + pos.y + 'px)'; }
  function face(left) {
    facingLeft = left;
    el.classList.toggle('face-left', left);
    el.classList.toggle('face-right', !left);
  }
  function computeHome() {
    home.x = window.innerWidth - W * 0.85; // bottom-right
    home.y = window.innerHeight - H - 6;
  }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  function knightCenter() { return { x: pos.x + W * 0.5, y: pos.y + H * 0.5 }; }
  function muzzle() { return { x: pos.x + (facingLeft ? W * 0.3 : W * 0.7), y: pos.y + H * 0.46 }; }
  function setHittable(on) { hitbox.style.pointerEvents = on ? 'auto' : 'none'; }

  function startTrail() {
    stopTrail();
    dashTimer = setInterval(function () {
      var c = knightCenter();
      var behind = facingLeft ? W * 0.34 : -W * 0.34;
      spawnFx('dashwind', c.x + behind, c.y + 18, facingLeft, fxBack);
    }, 100);
  }
  function stopTrail() { if (dashTimer) { clearInterval(dashTimer); dashTimer = null; } }

  function moveTo(tx, ty, done) {
    var sx = pos.x, sy = pos.y;
    var dur = Math.min(680, Math.max(160, Math.hypot(tx - sx, ty - sy) / 1.25));
    var start = null;
    playKnight('dash');
    startTrail();
    if (raf) cancelAnimationFrame(raf);
    function stepF(ts) {
      if (start === null) start = ts;
      var t = Math.min(1, (ts - start) / dur), e = easeOut(t);
      pos.x = sx + (tx - sx) * e; pos.y = sy + (ty - sy) * e; place();
      if (t < 1) raf = requestAnimationFrame(stepF);
      else { raf = null; stopTrail(); if (done) done(); }
    }
    raf = requestAnimationFrame(stepF);
  }

  function spawnFx(key, cx, cy, flip, layer) {
    var f = FX[key];
    var img = document.createElement('img');
    img.className = 'fx-sprite'; img.alt = '';
    img.style.width = f.w + 'px'; img.style.height = f.h + 'px';
    img.style.left = (cx - f.w / 2) + 'px'; img.style.top = (cy - f.h / 2) + 'px';
    if (flip) img.style.transform = 'scaleX(-1)';
    (layer || fxLayer).appendChild(img);
    play(img, FDIR, f, false, function () { img.remove(); });
  }

  function fireball(from, to, onHit) {
    var f = FX.fireball;
    var img = document.createElement('img');
    img.className = 'fx-sprite'; img.alt = '';
    img.style.width = f.w + 'px'; img.style.height = f.h + 'px';
    var flip = (to.x - from.x) < 0;
    fxLayer.appendChild(img);
    var anim = play(img, FDIR, f, true);
    var dur = Math.min(750, Math.max(220, Math.hypot(to.x - from.x, to.y - from.y) / 1.5));
    var start = null;
    function stepF(ts) {
      if (start === null) start = ts;
      var t = Math.min(1, (ts - start) / dur);
      img.style.left = (from.x + (to.x - from.x) * t - f.w / 2) + 'px';
      img.style.top = (from.y + (to.y - from.y) * t - f.h / 2) + 'px';
      img.style.transform = flip ? 'scaleX(-1)' : '';
      if (t < 1) requestAnimationFrame(stepF);
      else { anim.stop(); img.remove(); if (onHit) onHit(); }
    }
    requestAnimationFrame(stepF);
  }

  function buildAction(t) {
    if (t.matches('a[href]')) {
      var href = t.getAttribute('href');
      if (href && href.charAt(0) === '#') return { kind: 'hash', href: href };
      if (t.target === '_blank') {
        var w = window.open('', '_blank');
        if (w) { try { w.opener = null; } catch (_) {} }
        return { kind: 'blank', win: w, href: t.href };
      }
      return { kind: 'nav', href: t.href };
    }
    return { kind: 'button', el: t };
  }
  function doAction(info, t) {
    switch (info.kind) {
      case 'hash':
        var d = document.getElementById(info.href.slice(1));
        if (d) d.scrollIntoView({ behavior: 'smooth' });
        return false;
      case 'blank':
        if (info.win) info.win.location = info.href; else window.open(info.href, '_blank');
        return false;
      case 'nav': window.location.href = info.href; return true;
      case 'button': bypass = true; t.click(); return false;
    }
    return false;
  }
  function hit(t) {
    t.classList.add('avatar-hit');
    setTimeout(function () { t.classList.remove('avatar-hit'); }, 360);
  }

  function impact(info, t, target) {
    spawnFx('explosion', target.x, target.y);
    hit(t);
    var leaving = info.kind === 'nav';
    setTimeout(function () { doAction(info, t); }, LINK_DELAY);
    if (!leaving) setTimeout(goHome, LINK_DELAY + 60);
  }

  function idle() { busy = false; face(true); playKnight('idle'); setHittable(true); }
  function goHome() { face(home.x < pos.x); moveTo(home.x, home.y, idle); }

  function doMelee(t, info, target) {
    var moves = ['attack', 'strike', 'jumpAttack'];
    var m = moves[(Math.random() * moves.length) | 0];
    var a = ANIM[m], fired = false;
    playKnight(m);
    function fire() { if (fired) return; fired = true; impact(info, t, target); }
    setTimeout(fire, (a.n / a.fps) * 1000 * 0.5);
    setTimeout(fire, 900);
  }

  function doRanged(t, info, target) {
    var a = ANIM.cast, fired = false;
    playKnight('cast');
    function shoot() {
      if (fired) return; fired = true;
      fireball(muzzle(), target, function () { impact(info, t, target); });
    }
    setTimeout(shoot, (a.n / a.fps) * 1000 * 0.6);
    setTimeout(shoot, 1100);
  }

  function attack(t, info) {
    if (busy || dead) return;
    busy = true;
    setHittable(false);
    var r = t.getBoundingClientRect();
    var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    var fromLeft = (pos.x + W / 2) <= cx;
    var standX = fromLeft ? (cx - W * 0.62) : (cx - W * 0.38);
    var standY = cy - H * 0.5;
    var ranged = Math.random() < 0.4;
    if (ranged) {
      var rb = 1.1 + Math.random() * 1.65; // 1.1x (min, = old) .. ~2.75x (max)
      standX += fromLeft ? -W * rb : W * rb;
    }
    standX = Math.max(-W * 0.3, Math.min(window.innerWidth - W * 0.7, standX));
    standY = Math.max(4, Math.min(window.innerHeight - H - 4, standY));
    face(!fromLeft);
    moveTo(standX, standY, function () {
      var target = { x: cx, y: cy };
      if (ranged) doRanged(t, info, target);
      else doMelee(t, info, target);
    });
  }

  // clicking the knight himself: random reaction, or death at DEATH_CLICKS
  function onKnightClick(e) {
    if (e) e.stopPropagation();
    if (!enabled || dead || busy) return;
    clicks++;
    if (clicks >= DEATH_CLICKS) { die(); return; }
    var r = REACTIONS[(Math.random() * REACTIONS.length) | 0];
    playKnight(r, function () { if (!dead && !busy) playKnight('idle'); });
  }

  function die() {
    dead = true;
    setHittable(false);
    stopTrail();
    if (raf) { cancelAnimationFrame(raf); raf = null; }
    playKnight('die');
    setTimeout(respawn, 1000);
  }
  function respawn() {
    computeHome();
    pos.x = home.x; pos.y = home.y; place();
    var c = knightCenter();
    spawnFx('explosion', c.x, c.y);       // mask the respawn
    el.style.visibility = 'hidden';
    setTimeout(function () {
      el.style.visibility = '';
      clicks = 0; dead = false; busy = false;
      face(true);
      playKnight('idle');
      setHittable(true);
    }, 200);
  }

  document.addEventListener('click', function (e) {
    if (!enabled) return;
    if (bypass) { bypass = false; return; }
    if (e.defaultPrevented) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var t = e.target.closest ? e.target.closest('a[href], button') : null;
    if (!t || t.closest('#pix-avatar') || t.closest('#site-controls')) return;
    var info = buildAction(t);
    e.preventDefault();
    e.stopPropagation();
    attack(t, info);
  }, true);
  hitbox.addEventListener('click', onKnightClick);

  function preload() {
    var urls = [], k, i, f, j;
    for (k in ANIM) for (i = 1; i <= ANIM[k].n; i++) urls.push(KDIR + ANIM[k].pre + pad2(i) + '.png');
    for (f in FX) for (j = 1; j <= FX[f].n; j++) urls.push(FDIR + FX[f].pre + pad2(j) + '.png');
    urls.forEach(function (u) { var im = new Image(); im.src = u; });
  }

  function reset() {
    if (raf) { cancelAnimationFrame(raf); raf = null; }
    stopTrail();
    bypass = false; busy = false; dead = false; clicks = 0;
    el.style.visibility = '';
    computeHome();
    pos.x = home.x; pos.y = home.y; place();
    face(true);
    playKnight('idle');
    setHittable(true);
    if (!enabled && knightAnim) knightAnim.stop();
  }

  window.__knightSet = function (on) {
    enabled = on;
    if (on) { reset(); }
    else {
      if (knightAnim) knightAnim.stop();
      stopTrail();
      if (raf) { cancelAnimationFrame(raf); raf = null; }
      busy = false;
    }
  };

  preload();
  reset();
  window.addEventListener('pageshow', reset);
  window.addEventListener('resize', function () {
    computeHome();
    if (!busy && !dead) { pos.x = home.x; pos.y = home.y; place(); }
  });
})();
