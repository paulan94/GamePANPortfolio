---
title: Miscellaneous Changes
tags: [Design]
style: fill
color: info
description: Various miscellaneous changes...
---

## Intro
The past few days we have been focusing on fixing tech debt (moving from loading from the Unity Resources folder, to using the Addressables system in Unity), as well as updating the GDD to remove features that are no longer a part of our scope, and noting things that are not likely going to make it into the game.

## Encounter System
For a few months now, we had plans to allow for multiple types of encounters. However, we may have been a bit overzealous in our attempts to incorporate all these encounters. So we've made the executive decision to focus on just one, and focus our efforts heavily into getting it right- the **Combat Encounter**. There is also the Boss Encounter, but that is a near replica of the combat encounter.

## Loot Distribution Design
As we managed to settle on what our items/monsters/pets will look like, we can now look a little bit closer into how our Loot Distribution System will look. Quite plainly, player's can gain loot from killing monsters/bosses, from item chests, and from buying/selling to the NPC. I drew out in Miro what a simple Loot Distribution Screen might look like, and found a cool Unity chest asset to handle the opening of chests.

{% include elements/figure.html image="https://i.imgur.com/MLoh7xD.png" caption="Loot Distribution Screen example" %}

## Other Misc Changes
+ Up until now, basic attacks weren't factoring in status effect infliction chances. We have now enabled those chances, factoring in the correct stats from the player's items.
+ There was a problem with a potential of 6 types of damages being shown on the screen during a character's basic attack. To prevent a sort of screen UI text bloat, I've significantly lowered the chances of rolling a elemental type damage on an item, as well as locked physical/magical damage types to weapon categories. EX: Swords/Bows/Axes can only deal physical and elemental damage, not magical damage. Wands/Staves can deal magical and elemental damage but not physical damage.
+ Created a figure to visualize the flow of resources in Windwalker.

[<img src="https://i.imgur.com/VqWj0Tl.jpg">](https://i.imgur.com/VqWj0Tl.jpg)
*Click image to enlarge*

## Future Changes
+ Overhaul major aspects of Combat (cameras, UI, character placement/movement/animations)
+ Overhaul environment for combat scene, and main exploration scene
+ Get UX feedback on UI and plan changes



