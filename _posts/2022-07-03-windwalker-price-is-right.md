---
title: Windwalker Economy Pt. 2
tags: [Economy, Deep Dive]
style: fill
color: light
description: Putting a price tag on things...
---

## Introduction

As I dive even deeper into game economy design, I try to remind myself what the problem I try to solve for. For the past few days, I've been attempting to put a value on resources and actions in the game. Actions can be related to encounters, or player choice within these encounters. Different actions have different economic impact, and I'm trying to document these things. What I often find myself forgetting is how these changes I make will affect player engagement and retention, which is a big part of what a game economy designer does. 

{% include elements/figure.html image="https://i.imgur.com/7X2tbKM.png" caption="The loot table sheet as it stands today" %}


## Defining the Adjustable "Levers"

Some of them have double asterisks on them because I'm not quite sure if those values are accurate, as it is hard to gage without much testing. Most of these values dynamically scale.

* **Gold per Item Level**: Arbitrary gold value per item level.
* **Average Item Level gain per Level**: Average Item Level gain per increase in equipment level.
* **Player Level**: The player's current level, modified to see the difference in value for chests, etc.
* **Chest Average Level Above Player**: Used to calculate the average equipment level for the different chests. Chests give equipment that ranges from 0-5 levels above the player, so the average is the player level + 2.5.
* **Item Average Rarity Multiplier**: Items with differing rarities have different gold values, the exact value listed further down.
* **100% armor/weapon value**: Percentage values dictate the chance to get the suffixed item. In this case, 100% of getting an armor or weapon 2.5 levels above the player is worth that value.
* **10% arm/wep value**: 10% chance of getting the armor/weapon 2.5 levels above the player.
* **33% arm/wep value**: 33% chance of getting the armor/weapon 2.5 levels above the player.
* **50% arm/wep value**: 50% chance of getting the armor/weapon 2.5 levels above the player.
* **100% Gold**: Gold value calculated by average item level gain per level multiplied by gold per item level.
* **10% Gold**: 10% chance of getting the full gold value.
* **25% Gold**: 25% chance of getting the full gold value.
* **Common Equipment Multiplier**: Mentioned above, the gold value multiplier for a common equipment item.
* **Uncommon Equipment Multiplier**: Gold value multiplier for a uncommon equipment item.
* **Rare Equipment Multiplier**: Gold value multiplier for a rare equipment item.
* **Very Rare Equipment Multiplier**: Gold value multiplier for a very rare equipment item.
* **Ultra Rare Equipment Multiplier**: Gold value multiplier for a ultra rare equipment item.
* **Average Playtime/Day (Minutes)**: Average playtime per day in minutes as per https://adjoe.io/how-role-playing-games-are-retaining-users/.
* **Combat Encounter Average Time (Minutes)**: The average time it takes to complete a combat encounter in minutes.
* **Combat Encounter Expected Value (Victory)**: The expected value of a victorious combat encounter for the player.
* **Average # of Combat Encounters/Day**: The average amount of combat encounters players are expected to complete per day.
* **Average Value of Combat Encounters/Day**: The average value of combat encounters in gold players are expected to gain per day.
* **Average # of monsters in Combat Encounter**: The average number of monsters in a combat encounter (1+3)/2 .
* **Average Monster Kill Value**: Average value in gold per monster kill.
* **Monster Average Level**: Average monster's level.
* **Monster XP/Gold Value**: The monster's experience given value in gold. (Hard to measure, probably needs tweaking)
* **Average # of Monsters to Kill to get to level 100**: Probably don't need this, but average number of monster kills to get to level 100 (max level).
* **Average # of Monsters to Kill to level up at current lvl**: Used to determine xp boost gold value.
* **XP Boost Average Gold Value/Day**: The average gold value for the XP boost per day, calculated by the average # of combat encounters multiplied by xp boost average gold value per combat encounter below.
* **XP Boost Average Gold Value/Combat Encounter**: The average gold value for the XP boost per combat encounter, calculated by average # of monsters in a combat scene multiplied by the monster's XP value multiplied by the XP boost percentage.
* **XP Boost Percentage**: The XP boost's multiplier. 1.3 = 30% increase.


{% include elements/figure.html image="https://i.imgur.com/e4NOqji.png" caption="Visualizing difference for player lvl 25" %}


#### What's Next?

Tune these things and cross validate with how other games manage their economies to figure out the price point of these chests. Also keep in mind how the rewards might be tweaked to help player engagement/retention. Maybe adjust gold rewards to give less gold more often?

Thanks for reading!