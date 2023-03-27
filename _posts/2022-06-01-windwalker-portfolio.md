---
title: Windwalker
tags: [Windwalker, Portfolio]
style: fill
color: info
description: My contributions to Windwalker
---

## The Game

Windwalker is a 3d mobile (android) turn-based RPG built in Unity 2022 where players collect loot from combat and other encounters to cleanse the plague stirring in the fantastical world of Qubis. Enjoy a hand-crafted world, with thousands of unique items, creatures and acquire powerful pets to fight alongside you.

*We are currently in development, and slated to release in 2023.*

## My Role

Windwalker is my biggest undertaking yet! I am taking on the role of a lead designer in a small team. I do most of my work in updating game design documents and balancing various game systems in spreadsheets. I also have a big role in implementing a lot of my designs in code, as I have a strong technical background in engineering. There probably isn't a system I haven't touched!

## Mistakes I made (and hopefully will learn from)
Windwalker is still in development, so I'm currently making mistakes! However, given the large scope of our project, I have found myself having to update multiple documents when I make certain changes to our system. I've begun the habit of trying to link related documents so I can better follow which documents touch others. Related to this, in early stage iterations of my spreadsheets, it was virtually impossible for someone that wasn't me to make sense of my spreadsheets. To emulate what it would be like working with other designers, I've since iterated on those spreadsheets many times and have color-coded, commented, etc. cells so that things are more easily followed. It isn't perfect, but I am trying to be intentional with how I design these spreadsheets so that they can be more easily understood.

## Systems Design in Windwalker
Below is an introduction of the primary systems in Windwalker.

#### Combat
Windwalker is a game that is heavily combat orientated. The design is oriented in a way where players progress through combat. Through combat, players acquire new items, levels, pets, skills, classes, etc. Some important pillars for combat were as follows:
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


## My Other Blog Posts on Windwalker

Below are more long-form, detailed posts I've written about the various systems in Windwalker, and the development process.

**Bold** posts are my favorite posts.

- [Automated Combat Testing](https://paulan94.github.io/GamePANPortfolio/blog/automated-testing)
- [Monetization](https://paulan94.github.io/GamePANPortfolio/blog/note-monetization)
- **[Combat Balancing Pt. 3](https://paulan94.github.io/GamePANPortfolio/blog/combat-balancing-3)**
- **[Combat Balancing Pt. 2](https://paulan94.github.io/GamePANPortfolio/blog/combat-balancing-2)**
- **[Combat Balancing](https://paulan94.github.io/GamePANPortfolio/blog/combat-balancing)**
- [Approaching Closed Testing](https://paulan94.github.io/GamePANPortfolio/blog/nearing-testing)
- [Updating Design Docs](https://paulan94.github.io/GamePANPortfolio/blog/updating-docs)
- [Revisiting Skills, Updating UIUX](https://paulan94.github.io/GamePANPortfolio/blog/UIUX-skills)
- **[Systems Overview](https://paulan94.github.io/GamePANPortfolio/blog/windwalker-systems)**
- [Misc Changes Pt. 2](https://paulan94.github.io/GamePANPortfolio/blog/misc-changes2)
- [Windwalker GDD](https://paulan94.github.io/GamePANPortfolio/blog/windwalker-game-design-document)
- [Creating Compelling Game Loops](https://paulan94.github.io/GamePANPortfolio/blog/compelling-gameloops)
- **[Simulating Economy](https://paulan94.github.io/GamePANPortfolio/blog/machinations-economy-flow)**
- [Misc Changes](https://paulan94.github.io/GamePANPortfolio/blog/misc-changes)
- [Item Generation](https://paulan94.github.io/GamePANPortfolio/blog/item-generation-weekend)
- **[Balancing Stats,Skills,Items](https://paulan94.github.io/GamePANPortfolio/blog/game-balancing)**
- [Overhauling Pet System](https://paulan94.github.io/GamePANPortfolio/blog/simplifying-pets)
- **[Enemy AI](https://paulan94.github.io/GamePANPortfolio/blog/enemy-boss-behaviours)**
- [Battle Pass Exercise](https://paulan94.github.io/GamePANPortfolio/blog/windwalker-battle-pass)
- **[Economy Pt. 2](https://paulan94.github.io/GamePANPortfolio/blog/windwalker-price-is-right)**
- **[Economy](https://paulan94.github.io/GamePANPortfolio/blog/windwalker-economy-balancing)**
- [Skill Design](https://paulan94.github.io/GamePANPortfolio/blog/windwalker-skills)
- [Windwalker GDD](https://paulan94.github.io/GamePANPortfolio/blog/windwalker-game-design-document)
- [Design Terms and Windwalker](https://paulan94.github.io/GamePANPortfolio/blog/windwalker-design)

## Links
- [Windwalker Development on Youtube](https://www.youtube.com/playlist?list=PLI7P0BsA7YND6QXO0d05h36ZQkuPmotgr)


## Screenshots

{% include elements/figure.html image="https://i.imgur.com/kniCrg1.png" caption="Player Inventory" %}

{% include elements/figure.html image="https://i.imgur.com/kzW8sL8.png" caption="Our rotating NPC Shop to display some of our 100k+ items" %}

{% include elements/figure.html image="https://i.imgur.com/TOLIMNO.png" caption="Combat Scene with Debug Options" %}

{% include elements/figure.html image="https://i.imgur.com/eCwsqzH.png" caption="Dual Wielding Swords!" %}

{% include elements/figure.html image="https://i.imgur.com/S5ywuOr.png" caption="Dialogue Example" %}

{% include elements/figure.html image="https://i.imgur.com/3sHStTn.png" caption="Cash Shop UI" %}

{% include elements/figure.html image="https://i.imgur.com/qx92ScE.jpg" caption="Card Sorting skills based on type with my lovely girlfriend Judy." %}

{% include elements/figure.html image="https://i.imgur.com/XKNHLv6.png" caption="Random pet in red, and skill cooldown indicators in blue" %}


[<img src="https://i.imgur.com/8686HXB.jpg">](https://i.imgur.com/8686HXB.jpg)
A battle pass exercise I did. *Click image to enlarge*

[<img src="https://i.imgur.com/VqWj0Tl.jpg">](https://i.imgur.com/VqWj0Tl.jpg)
A flow of resources diagram. *Click image to enlarge*

{% include elements/figure.html image="https://i.imgur.com/x71Yb4f.png" caption="Tracking the various monsters on spreadsheets" %}