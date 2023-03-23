---
title: Enemy & Boss AI Behaviour
tags: [AI, Design]
style: fill
color: info
description: Designing meaningful enemies and enemy behaviour
---

## Introduction
Today I'll be going over two games that I've developed and how I designed their enemy behaviours to match the game's core gameplay loops/theme.

## [Factory Reset](https://pauloboy.itch.io/factory-reset )
**Game Introduction:** 
A steampunk ARPG, hack and slash type game. Play as Rusty, explore the garden, workshop, and make your way through a series of enemies, and test your skills against the final boss, Hammercrank!

Item drops are randomized, you have a chance of getting either a sword or musket, with differing rarities (W,G,B,P,GOLD), as well as a item level that adjusts stat values of that item. 

At the workbench, you can recycle weapons to potentially get a stronger weapon, at the risk of getting an item with a lower rarity.


**Enemies:** Due to the nature of the game-jam, we programmed our AI in Factory Reset to chase the player until the enemies were killed. This isn't ideal, but given the time constraints and small map size, it was an acceptable design decision. Every enemy attack that dealt damage past a damage threshold puts the player in a small animation lock (ministun). This change disallowed players from trying to round up many mobs and do splash damage, because the player would quickly be overrun with monsters. However, some players found out that they could mob monsters and lead them into environmental dangers like the saw-blades and farm quickly that way.

- **Whack-A-Bot**: Melee robot will chase you until it bops you into the ground.
	+ Attacks player from melee range, has a decent amount of hp, but slower move speed.
- **Trump-Bot**: This robot looks like a trumpeter when shoots it's gun strangely enough.
	+ This robot shoots projectiles that move quickly, but they are stuck in position until their shooting animation is completed. Easily kiteable, but much more dangerous in groups.
- **Mini-Me**: Mini version of the Whack-A-Bot.
	+ These small robots fit snuggly under stairs, and move very quickly. They deal a lot of damage, but don't have much hp.
- **Hammercrank**: The big, bad, bad guy. Stomps around with a giant hammer.
	+ The main boss has two states he can be in. The first state is the hammer slam state that he does if his target is nearby, otherwise he queues up a spell that shoots out projectiles in a circle around him. He may be difficult at first, due to the mobs that attack with him, but there is a easier method of fighting him if the player is observant. Two rooted cannons shoot at the player, but can also stagger and deal damage to Hammercrank if the player positions himself well. Using the cannons make this boss fight much easier.
	
{% include elements/figure.html image="https://imgur.com/lBpG5uB.png" caption="Hammercrank!" %}

### Closing Thoughts:

In Factory Reset enemies were designed without any thought for live services or longevity of the game, so it was a very simple task in terms of game economy and adjusting stats for items/enemies/player. The average playthrough would last around 1-3 hours. In Windwalker, we are building with a live-services system in mind which adds a degree of complexity.

## [Windwalker](https://www.youtube.com/channel/UCPjoaAwzzFb87fzl507IqtA)
**Game Introduction:** 
Windwalker is a heavily combat oriented mobile RPG with a unique encounter system. In Windwalker, players create their character and choose from 10+ unique classes. Players acquire items and tame pets to help them progress through the world. Combat is the heart of WW, and is turn-based with up to 6 characters in one fight (3v3). 

When dealing with enemies and bosses in WW, we see it from the context of combat. Before we dive deeper, we need to understand the intricacies of WW combat.

### Windwalker Combat

Combat in WindWalker is turn based. Combat encounters occur when players initiate battle with monsters on the map screen, as well as any combat related encounter. 
Players/Enemies/Allies will have a basic attack as well as abilities. There are different damage types like physical and elemental. The different elements will be Water/Fire/Earth/Wind. We have status effects like freeze(similar to stun),burn(dot),stunned, cut/exposed(take more dmg). AI controlled characters will prioritize characters with the highest threat level. Summoned units will be placed at the end of the queue.

Decisions made in combat should feel important, which translates to a higher difficulty than most mobile games. Mistakes will be punishing, and enemies will intelligently make decisions based on player actions. In order to make combat feel great, we need a well-thought out stats system that players, enemies, and items will use (Economy Design). On top of this, we have a extensive class system as well as ~100 unique skills (summons, buffs, debuffs, offensive, defensive, utility, etc)

When battle starts, all characters begin an initiative check. The character with the highest initiative will start the battle, and the rest of the queue will be in order of highest initiative.

After the initialization phase, the attacking character may choose to attack with their primary weapon, or use one of the skills that they will unlock as they level. Battle persists until one party is left.

With this groundwork set, let's move on to our AI in combat.

**AI**: We can adjust some of the things listed below to create unique encounters with WW enemies and bosses.
- **Threat**: Threat is a stat that every character in WW has. This stat determines the likelihood of the character being an AI's target. The exception is when the player is choosing a target. A higher threat correlates to a more highly target, and vise versa. A good example use-case of this would be a low-hp, high damage dealing player who finds a pet with high hp and high threat. In this case, this player can freely attack foes while his pet soaks up most of the damage.
- **Spells**: Our designers determine which abilities our AI has, and we can easily add/remove spells from our AI.
- **Basic Attack Chance**: The chance of the AI using a basic attack. We can increase this number to make the AI more likely to basic attack, or lower it to make it less likely.
- **Should Cast X Spell**: This is the real meat of our AI behaviour system. During the AI's Decision State, our AI may check to see if he or his teammates have a debuff (to cleanse it), is low on health (to heal self or ally), are there 2+ targets on the other side (to cast a target all ability), etc. These things only happen if the AI has the correct spell in it's arsenal. IE: They won't try to heal if they don't have a healing ability. On top of this, we also have the ability to adjust the likelihood of any of these things to be cast.
- **Bosses**: The above logic is consistent with how our bosses will be fought, but we haven't solidified our boss designs. Still, we've created a strong combat system that will allow us to create unique boss encounters. IE: We can play with phases in boss fights, as well as design hard to find weaknesses via our varied damage elements, etc.

	
{% include elements/figure.html image="https://i.imgur.com/WB8riNB.png" caption="Windwalker Current Combat AI Move Decision Logic as of 3/22/23" %}


