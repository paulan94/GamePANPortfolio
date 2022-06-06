---
title: Windwalker Game Design Document
tags: [Game Design, Documentation]
style: fill
color: light 
description: Getting Started on my first ever Game Design Document
---

## Welcome to my First Post

In this post, I’ll be going over some game design terms and how we’ve been applying them for our upcoming mobile RPG “Windwalker.”

## Determinism & Non Determinism
Windwalker, generally speaking, is a more non-deterministic game, in that given any one player’s state, their outcomes will differ based on multiple factors of randomness. Performing an action at a particular state may derive different outcomes. This is especially true in Windwalker in areas such as monster encounters, loot systems, combat damage randomness, and pet taming. In monster encounters, there are some deterministic factors such as determining which types of monsters can spawn in certain zones. The actual monster encounters however will differ based on their unique spawn chances. Pokemon does this as well in a similar vein.

{% include elements/figure.html image="https://gamerpaul648468864.files.wordpress.com/2022/06/ww-deterministic-pet-spawn-locations.png" caption="Deterministic pet spawn locations in red spheres" %}

{% include elements/figure.html image="https://gamerpaul648468864.files.wordpress.com/2022/06/machinations-loot-rarity.png?w=1024" caption="Non-Deterministic Loot System in WindWalker" %}

## Intransitive Properties
Intrasitive properties are defined by outcomes depending on simultaneous choices between two parties, usually the player and their enemy. Windwalker’s core combat revolves around a turn-based combat system against powerful creatures. In the first few iterations, our enemy AI would randomly choose between basic attacks, and skills they were programmed to use. The problem with this was that enemies could potentially use skills in situations that offers no benefit to themselves, so combat felt irregular and clunky. For example: enemies would heal themselves when they had full HP. In the latest iterations, enemies will now weight their actions based on the combat state. Enemies will use abilities in a more “smart” way, which makes combat much more interesting. They will heal themselves when their HP is low, use multi-targeted abilities when they face more than one opposing foe, etc. With this context, a intransitive property evident in Windwalker is in this combat system. Combat outcomes are determined simultaneously by player combat decisions against the enemy combat decisions.

{% include elements/figure.html image="https://gamerpaul648468864.files.wordpress.com/2022/06/ww-intrasitive.png" caption="Player buffs defense stats anticipating a big attack from the enemy." %}


## Symmetry vs Asymmetry 
In multiplayer games like chess, player’s start with the same set of pieces in the same relative positions. This is an example of symmetry, although you could argue that it isn’t symmetric because the white player always goes first. In Left 4 Dead, players can play as either humans, or zombies. This is an example of Asymmetry, since both parties have completely different characteristics. Windwalker has a PvP mode that is not live-time. This is to say that PvP encounters consist of a player fighting a snapshot of another player. I would argue that Windwalker is symmetric in this sense, since all players start the game as a level 1 Novice, and they then choose customization options like equipment/skills/classes/pets/etc.

{% include elements/figure.html image="https://gamerpaul648468864.files.wordpress.com/2022/06/ww-starting-area.png" caption="Starting Area for all new players" %}

