---
title: Overhauling the Pet System
tags: [Pets, Informal]
style: fill
color: light
description: Simplifying Windwalker's Pet System
---

## Overcomplications
I've been thinking recently about how many new game developers make the mistake of overcomplicating things in general. It's difficult for most new developers to stick to a small scope and execute on it well. Most of them, including myself set off with outlandish goals like trying to create an MMORPG in <1 year, and then quit halfway through development once they realize it will take 500 years. Now that I am further along in my journey, I better understand the importance of scope, and working with the resources I have.

My objective is to work at a studio where I can hone my design skills and be able to lead the development of a AAA MMORPG. Currently, I work in a small team, so we work with different resources than I would have at a bigger company. As such, I need to allocate my time in a way that helps me move towards my goals. Creating prototypes, wireframes, programming gameplay systems are general good uses of my time. Creating my own sound effects, or attempting to create my own art is not a good use of my time. It's better to outsource these things- and that's where the Unity Asset Store or third party assets come in handy. 

## Simplifying Pet System in WW
In a similar vein, I've been struggling to simplify our pet related systems in WW. At first I mocked up a few ways in which the player could first defeat the pet, which would then trigger a taming minigame, and then they would succeed/fail. With this type of system, I would have to fine tune a new gameplay feature, adding another layer of complexity to our game that was frankly out of scope. I remembered ORNA's pet acquisition system, where you run into a pet vendor, and they sell you one. If you already had one, the newly purchased one overwrites your existing one. Simple, clean, and a new way to sink currency out of the game economy!

This is the route we will most likely take with WW. With the work I've done already with the game's economy, it was easy for me to price the pets based on their item/power level. I think often we as humans are inclined to stick to our earlier solutions because we devoted our time and resources to making them work. What's more valuable is recognizing the faults of these solutions and putting your ego aside to be open to the idea that better ideas exist. This is not to say that one should chase the perfect solution, because there often isn't enough time to pursue such things. For myself, it's something I struggle with and work to fix.

The following are notes on the new NPC pet selling system which can be compared to the diagram below it to showcase the simplification of the system.

**How To Encounter Pets**
- novice to ranger class change (choose between 3)
- purchase them

**Pet Levels**
- 1:1 xp gain per combat encounter

**Purchasing Pets**
- show pets that are in the player’s level range (+-5 levels from player)
- if you have one pet, buying new pet overrides old pet
- beastmaster 2 pets (you choose which to override)

**Pet Generation:**
- 20 pets * 50 levels * 10 variations = 10000 unique pets?


{% include elements/figure.html image="https://i.imgur.com/yrchrUs.png" caption="Old system notes replaced with a simpler NPC system that serves the same purpose." %}


