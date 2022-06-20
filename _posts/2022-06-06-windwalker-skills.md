---
title: Windwalker Skill Design
tags: [Game Design, Documentation]
style: fill
color: danger 
description: Windwalker Skills 
---
## Windwalker Skills Introduction
In Windwalker, there were a few principles I wanted to incorporate with our skills system. The first thing being that a player's skills need to represent the player's class characteristics. For example: A mage should be casting cool spells, and a warrior might use a shout ability or a melee slashing skill. The second was that skill effects should scale dynamically with the player's stats, so that an increase in player power level translates to more powerful spells. Another important principle was to avoid multiple versions of the same ability.


## Windwalker Classes and Characteristics
#### Level 10:
**Warrior**: A Physically capable warrior primarily using melee weapons and high physical defense. 
**Mage**: A Spell casting magician learning to harness the chaotic nature of magic.
**Ranger**: One with nature, adept in trap-setting, bows, daggers, and spears.

#### Level 30:
**Knight**: A Defensive paladin, capable of bringing divine retribution onto enemies.
**Berserker**: A Unrelenting insatiable warrior, with a bloodthirsty desire to inflict physical harm.
**Spell Sword**: This warrior has learned to fuse melee mastery with magical prowess to create a deadly combination.
**Wind Walker**: A fierce combatant who walks as one with the wind.
**Beastmaster**: A stalwart monster-tamer whose animals would gladly die for him/her.
**Marksman**: A gifted marksman with mastery of the bow and trap-setting.
**Elementalist**: A master magician, conjuring advanced sorcery.
**Necromancer**: One who speaks with the dead, conjuring black magic and awakening the undead.
**Priest**: A religious healer, empowering allies and piercing defenses.


## Passive Skills
Passive skills provide additional "passive" bonuses to players. Warriors deal more physical damage, Beast Masters can increase the number of pets that fight alongside them, and more. From a design perspective, passive skills were also a great way to nudge players to use a certain set of items based on class. This is true because in Windwalker, any player can use any item as long as they meet the level and stat requirement. This gives players the freedom to use whichever items they please, but passives do push them to use a certain type. The passive skill "Blessed Shield" is one example we can use. Blessed Shield is granted to a level 45 Knight, and it's effect gives the player a X% bonus to all stats on their off-hand shield.


## Offensive Skills
All classes need to have some form of offensive skill with a few exceptions. Since WW is a single player game with a heavy emphasis on combat, each class should be able to defeat monsters via some form of damage dealing. The only exceptions would be the Beast Master class, who can fortify pets to indirectly deal damage, or some of the mage classes, who can deal damage via Buffs/Debuffs covered in the next section. Offensive skills are generally accompanied by a secondary or even tertiary effect, like inflicting a status effect, or having higher crit chance, etc.


{% include elements/figure.html image="https://i.imgur.com/2XGSn5B.png" caption="Some of the offensive skills in Windwalker" %}


## Buffs/Debuffs
Perhaps the most interesting type of skills in the game, the Buffs and Debuffs! Buff abilities can bolster the player, the party, or provide some other utility. Debuffs are the opposite, decimating enemies via a form of Damage Over Time(DOT), reducing enemy stats in some form, or cursing them to take more damage.

## Summons
Summons are reserved to the mage class line and 3/4 of them are available only to the Necromancer class, who can summon powerful creatures from the depths.

{% include elements/figure.html image="https://i.imgur.com/qx92ScE.jpg" caption="Card Sorting skills based on type with my lovely girlfriend Judy." %}



