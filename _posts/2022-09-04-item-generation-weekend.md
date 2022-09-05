---
title: Item Generation Weekend
tags: [Content Generation, Balancing, Tweaking]
style: fill
color: warning
description: Generating 150,000 unique objects!
---

## Intro
In the last post I dove deeper into balancing WindWalker during the production phase. We went over how I was able to boil down player/monsters/items measure of power to a singular parameter I named "power level," a common term in the RPG world. This weekend, Gary and I fine-tuned our generator scripts to be able to generate 150k+ unique items within an hour!

## Monster Generation

The logic to generate monsters is quite similar to generating items. The difference was that I needed to more manually determine their AI behaviour and decide which types of skills they should have. This process took a bit of time, but once done I was able to put my programming skills to use to generate 20k~ unique monsters and bosses! I haven't generate pets yet, but it will be very similar to how monster generation was done.

I believe I was able to procedurally create monsters that are randomized meaningfully. Monsters have baseline stat values based on their unique identity. They will also vary in stats between the same monster type with a set of stats that I believed make sense for those monsters to have. To give an example:
- The Bandwagon monster appears at levels (21-40)
- It's baseline stats are the following (not real):
	+ 	50 hp
	+ 	5 str
	+ 	5 dex
- Every Bandwagon monster can have the following stats added to the baseline:
	+ 	++ hp
	+ 	++ str
	+ 	++ dex
	+ 	++ phys dmg
	+ 	++ fire dmg
	+ 	++ crit chance

Upon generation, I could get the following:
- Level 21 Bandwagon (60 hp, 5 str, 8 dex, 5 fire dmg)

## Item Generation
There were a few new changes that I thought we needed to make before we solidified item generation. The following are some considerations/changes we made before generation began.
+ 	They should feel as powerful as they look. Our system didn't take this into consideration, so I grouped certain models to be generated only if they reached a certain power level threshold.
+ 	They should vary in stats greatly based on the type of item. I implemented a system to give an item a higher likelihood of getting a set of stats based on item type. (Weapons have higher damage stats, Armors have higher defensive stats, Amulets are wildcards.) To add to the sense of amulet uniqueness, I added an extra random stat to each amulet. (It's the only item that can have up to 5 stats (4 max for the others!)
+ 	More rare items!!! I figured it wouldn't hurt to throw in a few thousand more rare items to add to the late game progression. I increased the numbers of rare, very rare, and ultra rare items by few orders of magnitude higher!

Once I was relatively secure with our item generation logic, I fired up the generator to find that it would take an estimated 12-15 hours to finish generating all these items (INSERT SAD FACE HERE). I was okay with this, but Gary pushed to see if we could speed this process up. He quickly found a solution and upon my implementation, it reduced that time to a mere 30-40 minutes of generation. 

***Technical side node**: We were using Unity's AssetDatabase.CreateAsset function without first calling AssetDatabase.StartAssetEditing to group together asset importing into a larger import, and then finishing with a AssetDatabase.StopAssetEditing when done with our item generation*

## Why so many objects?
Great question! The main answer would be because I love variety in games. Now variety comes in many different forms and functions, but I think creating an abundance of items/monsters in a game like Windwalker really adds to a strong sense of personalization and challenges. Personalization in that you could play your character in unique ways like min-maxing your stats, trying to make yourself look as "cool" as you like, collecting pets, or sinking thousands of hours to try and find that impossibly glorious weapon. 

In relation to the monsters, I did my best to devise them to feel like you are fighting unique enemies with the combat system that we have. Monsters vary in stats in a meaningful way, so players aren't just facing random monsters in every combat encounter. Players should hopefully be adequately challenged, and think carefully about what action to take, or face the consequences!

{% include elements/figure.html image="https://i.imgur.com/bLfPP2s.png" caption="Item level/type/rarity composition, all generated with a click of a button!" %}

