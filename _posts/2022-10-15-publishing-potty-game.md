---
title: Updating an Older Game
tags: [Android, Unity]
style: fill
color: info
description: Break from Windwalker, publishing a game on Play Store
---

## Intro
This week, I took a break from Windwalker and spent some time polishing up a minigame I developed last year and released it on the Play Store. I'll be going over my process in the changes I made to it, and how I managed to limit feature creep and what my goals were in publishing the game. I stripped this minigame from my previous game titled (Dog - Bao Edition). It's a minigame where you aim your urine stream onto flowers and powerups and try to get a high score. Previously, your goal was to reach a score threshold high enough to unlock the next stage of the game (another minigame), but I needed to find ways to make it a more replayable game for it's standalone version.

{% include elements/figure.html image="https://i.imgur.com/hfWonpN.png" caption="Before and After Backgrounds" %}

## Goals and Scope
- **Release game**: Get more experience with releasing apps on the Play Store.
- **Test Monetization strategies**: Banner ads vs interstitial ads, etc.
- **Increase Replayability**: Add new types of flowers/bugs to spice up the game, and change how game flows.

## Increasing Replayability
Previously, the game was fairly replayable and players could work to get higher scores with a high degree of variability. Still, I wanted to increase the degree of variability further. I did this by increasing certain degrees of randomness with spawning entities as well as introducing new features to help with this.
- **Clocks**: I added clock objects that increase the timer upon killing them.
- **Spiders**: I created spider objects that crawl across the map and upon killing them the pee stream is upgraded with a flamethrower effect. I gave the spiders flame trails to help the player make better sense of the powerup that follows. I also loved how the addition of these spiders gave a sense of liveliness to the game because prior to them, things weren't moving as much. Spiders added a different dimension for players to pay attention to.

## Adding urgency
My goal was to make the player have a sense of urgency when the timer got closer to 0, so that player's would be more engaged in the game and try to get higher scores. To do this, I increased the spawn rate when the timer got closer to 0. During this time, the player is more likely to combo destroying flowers and quickly multiply their points.

## Future Changes
I'm going to go back to exclusively working on Windwalker now, but I have ideas and notes about many updates/fixes I can make to this game. The following are the main things.
- Balance changes: updating hp values for objects, spawn rates, and powerup damages.
- UI/UX: Due to my personal bias with playing hours of this game, I recognize I don't have the best judgment when it comes to making UI/UX changes. I've consulted with my UX designer partner, but haven't updated the game to her standard (far from it).
- Optimization: Although the game runs well, I came across some tech debt that was simply outside my scope for the duration I wanted to spend on this project. 

## Video Demo
[Gameplay Video](https://youtu.be/uAAwjFJLkrQ)

{% include elements/figure.html image="https://i.imgur.com/AoOojCt.png" caption="Before and After Gameplay" %}
