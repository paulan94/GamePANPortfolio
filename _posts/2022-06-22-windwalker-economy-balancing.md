---
title: Windwalker Economy
tags: [Economy, Deep Dive]
style: fill
color: info
description: Initial Balancing via Windwalker's Economy
---

## Introduction

As I dive deeper into how game economies affect the different game systems, I try to apply them to better my learning process. In the further learning section on the bottom of this page, I list two sources that have been helping me further my education in the game economy space. This post will summarize some of my learnings, as well as how I plan to implement them in Windwalker.


## Some Context

In Windwalker, player's progress via a leveling system, pet collection, and items. In this post, we will take a look at how player's gain stats through items and leveling. We will define some goals, and then do a costs-benefit analysis to set up our economy as well as we can in our first few iterations. The economy we design will affect combat and progression pace, so it's important that we can set up our building blocks properly. 

## Goals

* Define how item level/gold should be calculated.

* Come up with a metric to balance stats around item level.

* Revisit existing systems for improvements

### Player Stat Gain

Player item level gain at lvls 1-10:   +2 \
Player item level gain at lvls 11-30:  +6.5 \
Player item level gain at lvls 31-50+: +8

At Level 10, players will have a base item level of 18. (not counting base stats/items)\
At level 30, players will have a base item level of 141.5.\
At level 50, players will have a base item level of 293.5.


### Monster Stat gain

Monster item level gain at lvls 0-10:   +4\
Monster item level gain at lvls 11-30:  +9 \
Monster item level gain at lvls 31-50:  +11\
Monster item level gain at lvls 51-80:  +15\
Monster item level gain at lvls 81-90:  +20 \
Monster item level gain at lvls 91:-99: +25 \
Monster item level gain at lvl 100:    +40 

At Level 10, monsters will have a estimated base item level of 40.\
At level 30, monsters will have a estimated base item level of 270.\
At level 50, monsters will have a estimated base item level of 555.


### Balancing the Different Systems

The monster stat gain logic works differently than the player's stat gain. Once a monster reaches the next tier of 10 levels, each level of the monster is multiplied by the new tier's item level multiplier. Additionally, monsters also can't equip items, so it makes sense that they should have a higher base item level. However, player's have access to 5-6 items that will increase their item levels. For the sake of our game, we want the player to be able to defeat most monsters with ease, so our initial calculation may not be too far off the mark, especially considering that we could face up to 3 monsters. Let's move on to our existing item system.

### Making an Intuitive Change for Item Rarity Benefits

Before I spent much time diving into designing game economies, I tried to mimic what I could see in the RPG games I played. I (hopefully) know better now! 

#### Old Multiplier for Item Rarities
common: multiplier = 1f * 1 stat = 1x			**baseline**\
uncommon: multiplier = 1.15f * 2 stats = 2.3x 	**1.3 diff**\
rare: multiplier = 1.2f * 3 stats = 3.6x 			**1.3 diff**\
very rare: multiplier = 1.3f * 4 stats = 5.2x 		**1.6 diff**\
ultra rare:  multiplier = 1.5f * 5 stats = 7.5x 		**2.3 diff**


#### New Proposed Multiplier
common: multiplier = 1f * 1 stat = 1x			**baseline**\
uncommon: multiplier = 1.1f * 2 stats = 2.2x 		**1.2 diff**\
rare: multiplier = 1.15f * 3 stats = 3.45x 		**1.25 diff**\
very rare: multiplier = 1.2f * 4 stats = 4.8x 		**1.35 diff**\
ultra rare:  multiplier = 1.3f * 5 stats = 6.5x 		**1.7 diff**

In the old multiplier, I didn't think too much about how the item stats differed from one another. Upon closer examination, I realized that the stat differences weren't as consistent as I'd want, so I did some calculations and came up with the above new multiplier. 

{% include elements/figure.html image="https://i.imgur.com/i4X6w63.png" caption="This change will lower the power disparity of items based on rarity. " %}



#### Resource Relationships
I'm planning to balance resources in the game around item level and gold. This may prove to be more difficult with consumables, but we will begin this way.
We can start by stating that each item level correlates to 10 gold.

For items: we will also multiply the gold value by item rarity.\
1x common\
1.2x uncommon\
1.5x rare\
2x very rare\
4x ultra rare

#### Example Items and Their Gold Values

- Example Item lvl 25: \
    EquippableName: 'Uncommon Overloaded Greatsword '\
    Rarity: 1\
    ItemLevel: 75\
    Value =  900

This sword has a rarity of 1 (uncommon 1.2x multiplier) and an item level of 75. The Gold value of this weapon is 10(gold value) x 75 x 1.2 = 900

- Example Item lvl 41:\
    EquippableName: 'Uncommon Brilliant Greatsword '\
    Rarity: 1\
    ItemLevel: 130\
Value =  1560

- Example Item lvl 41:
    EquippableName: 'Exalted Weaponmaster''s Greatsword '\
    Rarity: 4\
    ItemLevel: 208\
Value = 8320

- Example Item lvl 50:\
    EquippableName: 'Exalted First Greatsword '\
    Rarity: 4\
    ItemLevel: 273\
Value = 10920


#### What's Next?
With this system set, I can now calculate the value of certain items in the game.

For example: ALL monsters have a chance of dropping the following at the same rate.
- Armor Chest: 2%
- Weapon Chest: 2%

For a level 50 Player: Assuming that the chest will drop any item rarity with equal chance, it's median rarity multiplier is 1.94x ((1+1.2+1.5+2+4)/5). Using my tool to generate 15 rare swords, I see that the average item level is around 160 for a rare sword. So, a chest that gives one rare sword at level 50 gives an expected value of 160 * 10 * 1.94 = **3104**.

Now we can say with decent certainty that killing a monster that can drop an Armor Chest at level 50 gives an expected value of 3104 * .02 = **62.08 gold**. Since they can drop Weapon Chests as well we can multiply that value by 2 = **124.16**. If we decide that is too high or too low, we can adjust as we see fit.


### Further Learning
[Game Balance Concepts](
https://gamebalanceconcepts.wordpress.com/)

[Balancing Economies in Albion Online](
https://www.youtube.com/watch?v=aX8f1lE09uY&ab_channel=GDC)