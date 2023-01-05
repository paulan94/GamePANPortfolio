---
title: Combat Balancing Part 2
tags: [Balancing, Combat]
style: fill
color: danger
description: Another week of combat testing and balancing
---
[Digest this post in Video Form Here!](https://www.youtube.com/watch?v=RFx0X3cN-w8&ab_channel=RevDevStudios)

## Intro

In this post we will dive even deeper into the changes that we've made to our systems to make combat closer to what we want. 

# Balancing Combat through Power Level

Balancing combat is generally a difficult task to do. You need to be aware of all the variables that affect the combat system, and then make assumptions on what tweaking those variables might do. You might ask a question like: "What would it feel like if we made monsters weaker, but spawned more monsters instead?" For Windwalker, we established a baseline measure of power across all 38 stats and called it **Power Level**. Since we created that ground work, we now have a system to balance our player, items, and monsters using that measure to tie everything together.

#### Items

In Windwalker, only players can use items. As a result, any increase to the power level for items would correlate to a direct player "buff." I could directly buff or nerf the player by fiddling with the item generation system. 

In the current iteration of item generation, we see low item power level averages in the earlier levels, that ramp up heavily at the level 11 mark, then increase slowly, until you reach level 100 (max). The average item power level gains are listed below. It's important to note however, that the min and max power levels for items at the various levels range heavily. The average power level gain per level across all levels is 1.75 per level as of today.

1-10: *1.3* average power level gain per lvl\
11-20: *1.9* **(+.6)**\
21-30: *2.25 (+.35)\
31-40: *2.6*(+.35)\
41-70: *2.7* (+.1)\
71-80: *2.92* (+.22)\
81-90: *3.13* (+.21)\
91-99: *3.47* (+.34)\
99-100: *4.19* **(+0.62)**

#### Player

Players gain stats as they level up. These stats are predetermined based on the players class. Players gain 4~ power level per level from 0-10, 6~ power level per level from 11-30, and 8~ power level per level from 31-100. All of that sums up to 720~ power level at level 100.


#### Monsters

With the power levels for both items and players set, we could now easily devise a system to create "balanced" monsters. We could simply get the level range of the monster we are trying to create, and add the average item level + the players base stat level gain to get a "perfectly" balanced monster in terms of power level.

**Example**: We want a level 15 monster.\
The player will have around 70(40+15) power level from base stats at level 15, and will have around 28.5(1.9 x 15) power level from items at that level. We could then generate stats for a monster that has power level 98.5(70+28.5).

The example above actually does not work well in practice, because power level by itself is not actually a good metric for monster generation. A monster could have a really high power level, but only because it's mana capacity is really large, or because it's dodge chance or resistances are high. So, we created logic to "smart" allocate stats for monsters to significantly reduce these things from happening. 

## Testing Pets

In the last post, I wrote about how we created an editor tool to allow for equipping random items. I added the functionality to randomly generate a pet at the player's level to test their strength in combat. Most players will acquire pets after their first few gameplay sessions and continuously look for stronger pets as they play through the game. Pets have their own power level and can offer immense support in combat scenarios. 

## Skill Balancing

As a result of testing combat, there were a few glaring issues that needed to be addressed. To summarize, abilities that were targeting more than one target were generally doing much more damage than single target abilities. So, I decreased the damage of most "target all offensive" abilities, and in some cases increased the damages of "single target offensive" abilities.

Summoning skills were also seemingly unbalanced. Summoned units had ridiculously high hp values, but had no defences. So, I reworked summon abilities to scale less with their main scaling stats, and also granted summoned units the same defences as their caster.

## Misc Changes

- I added skill cooldowns to the game, as well as some UI indicators to represent those cooldowns.

{% include elements/figure.html image="https://i.imgur.com/XKNHLv6.png" caption="Random pet in red, and skill cooldown indicators in blue" %}


[Digest this post in Video Form Here!](https://www.youtube.com/watch?v=RFx0X3cN-w8&ab_channel=RevDevStudios)

Thanks for reading!

Paul

