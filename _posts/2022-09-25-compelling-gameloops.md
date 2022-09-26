---
title: Creating Compelling Game Loops in Windwalker
tags: [Design, Systems]
style: fill
color: danger
description: Trying to minimize dev work while maximizing fun.
---

## Intro
The latest problem we've been trying to solve for in Windwalker has been to creating interesting gameplay loops with our current systems. As we begin to iron out combat, loot distribution, I'm forced to think deeper about how it will blend together. I began to reconsider our previous decision to transition from a simplistic 2d map to a more complex 3d style. We had to make a few adjustments with player movement, cameras, as well as do some level/env design.0 I wanted to be able to create interesting interactions for the player in a 3d space. I thought about creating a bigger world, where players might be able to interact with traveling NPCs, resources that spawn, pet taming, etc. The problem however was that this would set us back a few months, and we weren't comfortable with creating good level/environment design. 

{% include elements/figure.html image="https://i.imgur.com/yIwiVLa.jpeg" caption="Pen and Paper brainstorming session. excuse my handwriting"%}


## Brainstorming Notes

**Problem**: No clear execution on gameplay loop, how do we create interesting gameplay loop with minimal dev work?

**Primary Loop:**  Fight monsters -> upgrade gear/gain XP/advance classes.

**Proposed Solution** Update TownIsland scene to be a player hub with merchant NPC, Dungeon Master/Sensei.

**Dungeon Master/Sensei:** Triggers combat encounters for the player, can also consume player's boss tokens to trigger a boss encounter. The DM/S will also sell Trial tokens for gold that place players in a random set of combat encounters with varied rewards like a sort of gauntlet style encounter. 

**Why this Solution?** Minimum dev work in comparison to doing lots of level/env design. It solidifies the emphasis on combat as a core feature in WW.

## Changing Boss Encounters
Up until now, boss encounters were rare encounters that the player had a chance of triggering. Now, they are triggered through the consumption of boss tokens through the newly proposed Dungeon Master. Boss Tokens can be found from killing monsters, rarely found in the NPC store, or purchased directly through the cash shop. In economy design, the difficulty in adding new systems is trying to gage the impact of the new system against all other existing systems. Luckily for us, we don't have too many systems that will need adjusting.

* Loot System: I now need to include a way for players to gain boss tokens through playing the game naturally. My solution was to add the boss token to monster loot drops at a very low drop rate as well as the other ways mentioned above. This throws off the entire balance of the economy, since it was previously balanced around the existing systems, and now I need to weight and factor in the value of boss tokens in the loot pool. In order to value the boss tokens, I first need to understand the boss encounter's net value at each player's level, and after some testing determine the success rate of a boss encounter since not all players will be successful in these encounters. 

## Adding NPCs
Prior to writing this blog, we had 0 plans to include any NPCs. I created a way to interact with NPCs via a click, which triggers a dialogue popup. I found [D'Dialogue](https://assetstore.unity.com/packages/tools/gui/d-dialogue-system-167312) on the Unity asset store, and am using it to handle the NPC dialogue in Windwalker. 
* The Dungeon Master's interactions were mentioned above. 
* The Merchant NPC allows the player to buy/sell things.
* 3 "Class Master" NPCs that will promote players to their desired classes. 

{% include elements/figure.html image="https://i.imgur.com/snLpuXp.png" caption="Dialogue Example with the Mage Class Master"%}


## What's Next
I've been having fun playing around with the environment, I'll be working to get it to a state where I'm happy with and then move over to ironing out the dungeon master interactions. 

{% include elements/figure.html image="https://i.imgur.com/vl9ntBt.png" caption="Merchant Area"%}
