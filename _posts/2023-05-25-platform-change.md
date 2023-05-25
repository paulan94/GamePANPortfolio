---
title: Switching Platforms and Various Changes
tags: [Steam, Design]
style: fill
color: danger
description: Deciding to change platforms to do a Steam release on PC, and the challenges that come along with it.
---


## Intro
Hello! It's been a long time since my last post. I wanted to recharge and get some rest after some arduous interview sessions. In an effort to speed up production and get our game out, we made some big sacrifices. After nearly 2 years of working on our project, we are admittedly feeling the effects of taking on such a task. We are still dedicated to releasing a game we are proud of, but the reality is that working on a small scale project while maintaining coordination is a non-trivial task. Rest assured, the development has been consistent, although some big changes are coming. The biggest change being that we have decided to pivot from our initial Android only release to a PC (Steam) release. After a few rough months of trying to bundle our mobile build onto the Google Play store, we decided that a Steam release made more sense for us. In this blog I'll be going over the hurdles of making such a change this late into production.

## The Big Port
Porting over to a PC release wasn't as hard as you might expect. In Unity, you can simply tick a box to change the target build platform, although there is some nuance to it. In order to interface with the Steam API (Steam login, MTX, etc.), we decided to use a 3rd party C# Wrapper called [Steamworks.NET](https://steamworks.github.io/). As this would be our first Steam release, we spent some time learning how to use the API and manage save files on Steam Cloud, etc. 

## Design Changes
Changing platforms would mean we would have to consider how the design of the game would change. In this regard, we decided to change our monetization structure- as the persona types for PC gamers are different than mobile gamers. There are also other things to consider, like monetization norms for mobile platforms vs PC. This restructuring was challenging because we had to re-evaluate our goals and design systems, while being mindful of the trickle-down effects of any minor change.

{% include elements/figure.html image="https://i.imgur.com/982MnEd.png" caption="Our Steam Page WIP" %}

## NPC Shop
I spent the last few weeks working on all things related to the NPC Shop. I updated how items show in the shop, implemented code to make the shop functional, made UI updates, and finally added purchasable pets to the shop. Previously, the player had to either watch an ad or pay hard currency to refresh the shop. Now, they simply have to pay a fee in gold (soft currency) to refresh the shop. The fee scales by the player level. 

The shop is also now "fully functional." Prior to my latest changes, the items you purchased didn't go into your inventory, and you also couldn't sell any of your items. Now, as we near closer to testing the full gameplay experience, we can better determine player progression by incorporating our NPC shop into the mix. The NPC Shop is meant to be vital for player progression, as players will often find powerful items/pets here.

{% include elements/figure.html image="https://i.imgur.com/Sgwj72Y.png" caption="NPC Shop UI WIP" %}

## Misc Changes
There have a large amount of changes since my last post, and I'll attempt to list a few of them here.
- Steam
	+ Cloud saves (play your save file from any computer)
	+ Resolution Options
- Multiple Save Files: if you want to have multiple characters, now you can!
- Nerfed Warrior, Knight, Berserker offensive skills: They generally did too much dmg while having high survivability.

As always, thanks for reading!

Paul

