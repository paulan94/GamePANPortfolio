---
title: Windwalker Systems Overview
tags: [Systems Design]
style: fill
color: light
description: Diving deeper into Windwalker's game systems.
---

## What is Systems Design?
I think you will get varying definitions which I find to be common in the design world, but I'll try to put it into my own words as best I can. Systems Design is the process of designing gameplay systems/mechanics with a goal of trying to make things fun and engaging. When we first conceptualized Windwalker, we had high level ideas of what our key gameplay systems would be, and we quickly prototyped skeletons of those things (combat, skills) to ensure it would be a good experience in the future. Once we were confident that we could do those things, we began iterating on those systems to make things better (small scale tweaking numbers, exp values, etc). 

In the early stages of a project, most of the systems designs work is to create those systems and form relationships between them. Then, the work revolves around iterating on those systems to align with the goals of the design and maintaining those design philosophies throughout post-production. With this post, I'll be diving into how I designed the core systems that make up Windwalker.

#### Combat
I've wrote about this in many different ways in this blog, but Windwalker is a game that is heavily combat orientated. The design is oriented in a way where players must progress through combat. Through combat, players acquire new items, levels, pets, skills, classes, etc. Some important pillars for combat were as follows:
1. Players should be rewarded for game knowledge (exploiting enemy weaknesses, using the right skills at the right time, etc). 
2. Combat should be casual friendly (no huge penalty for losing, easy to understand).
3. Players shouldn't have to wait long for their turn (AI turns are easily understandable, and shouldn't take long).

#### Abilities/Skills
In addition to the pillars mentioned, combat should be fun above everything else. I grew up playing class-based RPGs like Maplestory, Ragnarok Online, Guild Wars 1 & 2, and really appreciated the different personas of the different classes. I think the most focused time I had working on Windwalker thus far was during the months I designed, implemented, and tested all the skills for each of the classes. In the months following, I added additional 2nd job classes for each of the primary classes, and then tweaked skill stat values in the name of balance. 

Perhaps the most important pillar for skill design was that all classes needed to have at the very least a moderate level of offensive ability. This was due to the nature of how combat works in our game.

When coming up with skills in WW, I looked to my class reference sheet to think about what sorts of abilities should be available to the respective class. Beast Masters had more pet-oriented skills, whereas the Berserker class had powerful offensive skills that were balanced with their lower base defensive stats.

#### Balancing
I scoured the internet to learn about how to balance a game. I drew inspiration from countless GDC talks, blogs I stumbled upon, etc. I did a lot of the balancing work in Google Sheets. I was able to more quickly iterate on things like damage/shop/enemy balancing on spreadsheets, because I could quickly change specific values that would automatically update other values. Ex: Updating the player level cell in my "Loot Table spreadsheet" instantly updates the value of multiple player rewards/actions at the newly updated player level. The best advice I found was to start with arbitrary numbers, and then create relationships between different actions/systems. In WW, I started by creating a power level system- that tells the player the general "power" of an item. This "power" was calculated by breaking down each stat we had in the game, and then referencing a "power level dictionary" to determine how much "power level" a certain stat should give. 

**Power level example**
- In WW, we have 4 primary stats: Str, Dex, Int, Con.
- We will focus on 1 point of Str.
- 1 Point of Str gives (+2 phys dmg, +1.5 hp, +0.5 phys def, +0.2 hp regen)
- Those "secondary" stats are what give the player "power", and when we add those up after referencing our "power level dictionary", it equals to roughly 1.25 power level.

So I pressed on, made various changes as to which stats should give how much power level, and am continuing to make these sorts of tweaks as new information is learned. I then realized I could use this power level system to determine how strong monsters should be, and it even allowed me to determine how powerful our class passive abilities should be. For item/monster generation however, I devised ways in which the likelihood of the same stat given to a monster/item multiple times was extremely rare, but still possible. I wanted to make it possible so that there would be some very rare cases where high variance could occur and potentially add to a sense of personal accomplishment when acquiring such a rare item.

#### Enemies
I knew early on that I wanted to maximize the variety in combat encounters with monsters, because fighting the same monsters over and over would probably not be very interesting. It would be a struggle to afford too many unique assets and manage their animations, so we thought for different ways to make interesting encounters with our constraints. I decided we would recycle our item generation code and make a modified version of it to create unique and variable monsters. Still, we wanted to stay true to combat pillar 1, so we needed monster stats to be somewhat deterministic. I devised a system to determine a monsters base stats based on the monster type, then add variability through certain archetype modifiers like offensive (more offensive stats), defensive (more defensive stats), spellcaster (more int, mag dmg, mag def), etc. Our system would then fill in the stats for those monsters until they reached a power level that was adequate for it's level.

#### Enemy AI
In WW, our enemy AI decides what their action will be based on the game state as well as a degree of randomness based on the monster set by the designer(me!). Players who fight the same monsters may pick up these AI behaviours and be rewarded for making smart decisions based on their knowledge. Below is a copy of an older post I made to explain the variables that affect our AI's decision making.

**AI**: We can adjust some of the things listed below to create unique encounters with WW enemies and bosses.
- **Threat**: Threat is a stat that every character in WW has. This stat determines the likelihood of the character being an AI's target. The exception is when the player is choosing a target. A higher threat correlates to a more likely target. A good example use-case of this would be a low-hp, high damage dealing player who finds a pet with high hp and high threat. In this case, this player can freely attack foes while his pet soaks up most of the damage from enemies.
- **Spells**: Our designers determine which abilities our AI has, and we can easily add/remove spells from our AI.
- **Basic Attack Chance**: The chance of the AI using a basic attack. We can increase this number to make the AI more likely to basic attack, or lower it to make it less likely.
- **Should Cast X Spell**: This is the real meat of our AI behaviour system. During the AI's Decision State, our AI may check to see if it or its teammate has 'X' Spell, and whether or not the game's state is in a condition to cast 'X' spell. For example: does a character on the AI's team have: a debuff? (to cleanse it), low health? (to heal self or ally), are there 2+ targets on the other side? (to cast a target all ability), etc. These things only happen if the AI has the correct spell in it's list of spells. IE: They won't try to heal if they don't have a healing ability. On top of this, we also have the ability to adjust the likelihood of any of these things to be cast.
	
{% include elements/figure.html image="https://i.imgur.com/WB8riNB.png" caption="Windwalker Current Combat AI Move Decision Logic as of 3/22/23" %}

#### Progression
Progression in WW is tied to a player's level and power level. Players acquire items from combat, buying/selling from the NPC shop, and will directly affect the player's power level. Commonly found in other similar games, items give a player a sense of personal customization and create a sense of power measure. Levels can measure how far a player is in a game, and provide static stat bonuses. Players also choose between various classes at levels 10 and 30, that impact the types of items they are more likely to use, their playstyle, and the kinds of skills they have access to.

**Pets**
I like to consider pets as a sort of wild card "item" that the player can purchase to give them more indirect power. I wanted to add this section in because I think the added feature of acquiring a cool pet really makes the game more interesting and fun. Pets fight alongside you with attacks/skills. Like monsters and items, we generated thousands of unique pets to add to the consistent sense of variety. Pets have a chance to appear at the NPC shop to be purchased by the player for a high sum of gold.

## Closing Thoughts

We went over the core systems of Windwalker in this post. Combat, Enemies, and Progression. In any game, nearly every system is interlinked, and has within them subsystems. A subsystem within progression would be the leveling system, which also relates closely with combat and enemies. Within the leveling system, we could dive deeper about how much XP is required to level up at a given level, how much gold a player should have at a certain level as intended by design, and then even calculate the overal estimated power level of the player at that level. The more we track these statistics in spreadsheets, the more information we have as designers to make well-informed decisions to hopefully make an enjoyable experience for the player.