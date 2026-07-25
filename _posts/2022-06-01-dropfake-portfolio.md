---
title: DCKO
tags: [Dropfake]
style: fill
color: info
description: Senior Gameplay Designer at Drop Fake
date: 2026-01-15
permalink: /blog/dropfake-portfolio
---

##### Last Updated on 7/20/26

# Senior Combat Designer - Drop Fake

{% include elements/figure.html image="/assets/img/dcko-hero.webp" caption="DCKO, a DC Comics tag-team mobile fighter" %}

I design combat kits and the systems that support them for a DC Comics licensed tag-team mobile fighting game. I own features from concept through playable prototype, tuning, and handoff, and I lean on an engineering background to build tooling, debug scripts, and work directly in backend data when it moves the feature forward.

---

## The game

A tag-team mobile fighter built around swapping characters mid-combat. The tag mechanic is the core design constraint: every kit has to read clearly on its own _and_ create meaningful interplay with the character it hands off to. That interplay: on-field vs. off-field roles, what one character sets up for the next, is where most of the interesting design lives, and where most of my work has been.

I've contributed across the full roster and the systems underneath it, from concept to tuning, and playtest ready builds.

---

## Combat & systems design

**Class framework** I helped establish and apply a four-class model that gives each character/class a clear mechanical identity and a clear role in a team. Classes aren't cosmetic tags, rather they set expectations for what a kit is _for_ (raw dmg, sustain, evasion & tempo, or setup/debuff) and give me a shared vocabulary for pitching, reviewing, and tuning kits consistently across the roster.

**Combat rules and data-driven content** I built reusable combat patterns: combo/cancel windows, defensive counters, simple resource rules, so new characters are faster to stand up and safer to tune. The goal is that a new kit inherits proven scaffolding instead of reinventing timing and state-tracking from scratch, which shortens implementation time and reduces the surface area for bugs.

**Progression and upgrade systems** I design -> document -> implement the systems that sit on top of individual kits. How a character deepens or shifts as players invest in them, including the milestone structure and the tunable thresholds engineers and content teams work against.

**Team-level interaction systems** Because the game is built on tag-teaming, a lot of my design happens at the cross between two characters: how an off-field character contributes, what triggers a hand-off, and how to keep those interactions readable rather than a soup of hidden triggers. I've driven definition and rework of these shared systems in partnership with engineering and design direction, including making hard cuts when a mechanic was too opaque or too costly to support. (it always hurts)

---

## Technical range

I flex an engineering-to-design background to support the team beyond pure design:

- Build and extend in-engine tools to remove pipeline friction (faster iteration on kits and content).
- Debug gameplay scripts and backend server data directly rather than blocking on engineering.
- Prototype in Unity/C# to validate feel, readability, and timing before committing animation or VFX effort.

**Tools & tech:** Unity / C#, UE5, Gameplay Ability System, visual scripting, Python, Jira.

---

## FTUE & onboarding

I created the first-time user experience to introduce mechanics progressively, teaching through play instead of front-loading rules, with the goal of reducing early player friction and getting new players to their first real fight faster.

---

## Process

1. **Concept**: define player goals and mechanical intent for a kit or feature.
2. **Prototype**: minimal in-engine build to test feel and readability.
3. **Playtest & instrument**: targeted feedback, playtest notes, telemetry where available.
4. **Tune**: iterate parameters, animation windows, and feedback until it's clear and balanced.
5. **Handoff**: concise design docs, tunable data, and implementation notes for engineers and content teams.

I carry features end to end and coordinate the cross-discipline implementation (animation timing, VFX clarity, code hooks) myself rather than throwing a doc over a wall.

---

## A note on AI

I use AI tooling day to day (code generation, notetaking, idea exploration) and spend time outside work building personal LLM projects. It's part of how I move faster on prototyping and documentation, not a substitute for design judgment, but a real force multiplier on the parts of the job that aren't the judgment.

---

_Specific character kits and unreleased mechanics are covered under NDA for now. Happy to walk through detailed design work, tradeoffs, and specific contributions in a private conversation._

## Links

[Official Game Page](https://playdcko.com/)

[Official Studio Site](https://www.dropfake.com/)
