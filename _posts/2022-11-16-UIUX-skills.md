---
title: Revisting Skills and Updating UI/UX
tags: [UI/UX, Skills]
style: fill
color: danger
description: Updating skills, animating texts, and various UI/UX changes.
---

## Introduction
This will be a shorter post going over the latest changes we've made to Windwalker. I took a bit of a break to focus on interviews and personal things, but I'll be back to make regular updates now! I've added visual UI for all status effects/buffs/debuffs now, and used [DOTWEEN](http://dotween.demigiant.com/index.php) to animate damage numbers.

{% include elements/figure.html image="https://i.imgur.com/FenmN9y.png" caption="Status Effect Icons under the hp/mp bars" %}

## Revisiting all Skills
I revisited all of our game's skills to fix or note any bugs that I would find since we've overhauled certain aspects of our combat system. Some skills were missing indicators that asked the player to choose a target, while others were simply not dealing any damage! I made various audio changes, updating to put together better sounds, as well as changing the timings of audio clips. While I was able to fix most things, I noticed during testing that our damage fonts weren't impressionable and we lacked UI animations. So, I changed the font, added animations, and found out about a way to increase the visual fidelity of the text to look more clear.

One of the more significant changes I made was to remove Trap type skills in Windwalker. These skills placed a collidable object in between the player and enemy sides, and would trigger when an opposing character collided with them. It worked exactly as intended, but there were various concerns such as fighting an all ranged team, and a few bugs that seemed difficult to squash. The traps were actually pretty fun to use, but we only had 3 trap skills. I ultimately decided they didn't add too much to the game. So, I replaced them with these  unique abilities.

1. Gambit's Rain - Deal a random element's damage to all enemies.
2. Gambit's Flurry - Fling multiple arrows at a random opponent.
3. Howling Gust - Conjure a powerful gust of wind that has a high chance to inflict Expose to enemies.

## UI/UX

Using [DOTWEEN](http://dotween.demigiant.com/index.php), I animated damage texts to be different based on the damage type. For physical damage, I tried to emulate the text to look like a slashing sword. For magical damage, I made the text shake vigorously in random directions. I'm still playing with these animations, so I won't show them here yet, but they are already significantly better than the last iteration.

{% include elements/figure.html image="https://i.imgur.com/izvhkzi.png" caption="Updated Damage Text Font (Physical)" %}

I added a mana cost text UI above the skills so the players could see how much mana those skills cost, and we added text indicators that popup when the player tries to cast a spell when they don't have the required resource (mana/hp/other).


{% include elements/figure.html image="https://i.imgur.com/3FexHTb.png" caption="Added Mana Cost Text for Skills" %}


