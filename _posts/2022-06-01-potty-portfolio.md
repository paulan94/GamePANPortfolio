---
title: Potty Power
tags: [ Portfolio]
style: fill
color: info
description: Potty Power!!!
---

## The Game
Potty Power is a minigame that I stripped and revamped from an earlier game I had released called dog(Bao Edition). It's a minigame where you aim your potty stream onto flowers and powerups and try to get a high score. Previously, your goal was to reach a score threshold high enough to unlock the next stage of the game (another minigame), but I needed to find ways to make it a more replayable game for it's standalone version. Potty Power is available to play on the Google Play Store.

## My Role
I made this project myself! As this was a redesign of an older game, I focused on increasing the replayability of the game, and finding ways to give players a sense of urgency when their game timer was almost expired.

### Increasing Replayability
Previously, the game was fairly replayable and players could work to get higher scores with a high degree of variability. Still, I wanted to increase the degree of variability further. I did this by increasing certain degrees of randomness with spawning entities as well as introducing new features to help with this.
- **Clocks**: I added clock objects that increase the timer upon killing them.
- **Spiders**: I created spider objects that crawl across the map and upon killing them the pee stream is upgraded with a flamethrower effect. I gave the spiders flame trails to help the player make better sense of the powerup that follows. I also loved how the addition of these spiders gave a sense of liveliness to the game because prior to them, things weren't moving as much. Spiders added a different dimension for players to pay attention to.

### Adding urgency
My goal was to make the player have a sense of urgency when the timer got closer to 0, so that player's would be more engaged in the game and try to get higher scores. To do this, I increased the spawn rate when the timer got closer to 0. During this time, the player is more likely to combo destroying flowers and quickly multiply their points.

## Mistakes I made (and hopefully will learn from)
I don't revisit old projects often, but when I was trying to strip this minigame from dog(Bao Edition), I realized how unorganized my code was. I think I'm already improving on this, but looking back at my old code made me realize how difficult messy code could be to pick up years later. Another thing I should've done was to organize all the "peeable" objects onto a spreadsheet where I could more easily see/balance things. I had all the "peeable" objects only referenced in code, and it would get really hard to organize that way if I were to scale this project further.

## Screenshots

{% include elements/figure.html image="https://i.imgur.com/hfWonpN.png" caption="Before and After Backgrounds" %}

{% include elements/figure.html image="https://i.imgur.com/AoOojCt.png" caption="Before and After Gameplay" %}


## Links

[Blog Post](https://paulan94.github.io/GamePANPortfolio/blog/publishing-potty-game)

[Youtube Link](https://www.youtube.com/watch?v=uAAwjFJLkrQ&ab_channel=RevDevStudios)



