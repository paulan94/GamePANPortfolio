---
title: Windwalker Game Design Document
tags: [Game Design, Documentation]
style: fill
color: light 
description: Getting Started on my first ever Game Design Document
---


## Game Design Document
A game design document exists to bridge the gap between producers, artists, engineers, business, and all other teams that work together to shape a game. This document is heavily iterated on, and serves as a source of truth for the different teams. In the case of our studio, it is constantly revisited and reworked.

### Windwalker's Tagline:
 Windwalker is a mobile RPG with a unique encounter system that is heavily combat oriented. Players progress via a leveling system, job advancements, and a 100,000+ item system. Windwalker features an up-to 3v3 turn-based combat system with 100+ unique skills. Enjoy a hand-crafted fantasy world, acquiring powerful items and taming powerful creatures to fight alongside you.

### Getting Started Writing the GDD
It's been about 6 months since the inception of Windwalker's GDD. It began first by copy and pasting a template of what a GDD should typically have. From there, we began to slowly define the key elements of our game. These key elements were defined through brainstorming meetings with our key stakeholders. Once we felt we had a grasp of our high concept, we looked into what resources we would need to prototype our awesome game. It took over a month to decide on what these key elements should be, and how these different elements would interact with each other. What followed next was drawing initial diagrams to represent things like player flows, and they began to get more complex upon iteration. My cofounder Gary Fong architected technical flows as he began to sync player data onto the cloud.

{% include elements/figure.html image="https://i.imgur.com/mw6cTvL.jpg" caption="Early Example Game Flow" %}

{% include elements/figure.html image="https://i.imgur.com/NaQ2TAw.png" caption="Technical Architecture Crafted by Gary Fong" %}

### Windwalker is Combat
The biggest key element in Windwalker is Combat. The core gameplay progression revolves mostly around combat, and other "secondary" key elements like items/stats/skills/pets/classes exist in large part to make combat  interesting. I worked with my rockstar UX Designer girlfriend Judy Wu to prototype in figma what combat could look like in a turn-based game like ours. Gary and I quickly got to working on a prototype featuring an up to 6v6 arena, but after some playtesting sessions and research, decided against the large player count. I'll dive into this later in another blog post. We tracked our progress as a team via Trello, and have been devoting most of our efforts into making combat feel good. In a design perspective, this meant that I needed to deep dive into how other games with similar systems worked. I researched into how DnD distributes EXP to players, found a commonly used, easy to balance damage/defense formula, devised a stat system where commonly found primary stats like STR,DEX,INT,CON would affect secondary stats like PHYS_DMG, CRIT_CHANCE, MAX_HP, etc. I squeezed out my creative juices in developing our class system as well as unique skills for those classes. Back to the GDD, my point again is that these systems I mentioned all funnel into combat interesting. WINDWALKER IS COMBAT!


{% include elements/figure.html image="https://i.imgur.com/86NiNZ8.png" caption="Current Combat Scene" %}


### Key Takeaways
The GDD is still being iterated on, but these are a few key takeaways I've gathered from writing my first GDD.
- Be patient, and lay the groundwork before diving headfirst into designing and developing. The entire game's vision won't be apparent for at least a few months, so just constantly iterate and improve upon key elements that make the game fun. As we defined the key elements, we were able to divide those things into smaller subcategories and piece them all together.
- Lower scope, lower scope! As a very small indie studio, we have limited resources. Spending money on some assets is a good use of money to save us time so we can focus on game mechanics and design.
- Collaborate with your team to update the GDD. Everyone has a unique perspective on what the game should be like, so it's important to sync up and get on the same page. Good documentation leads to less confusion and headache.

{% include elements/figure.html image="https://i.imgur.com/anh2yaN.png" caption="Proof a GDD exists!" %}
