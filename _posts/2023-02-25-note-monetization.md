---
title: A note on Monetization
tags: [$$$]
style: fill
color: info
description: It's not a nefarious thing!
---

## Intro

This post will mostly be about monetization in games, how we plan to implement it, as well as a few big changes that have been made so far. I've been busy lately interviewing at companies, so progress on Windwalker has slowed a little bit. However, we are still continuing to make progress and make great changes to reach out release goal of 2023. Gary completely overhauled our stats system, so that stat modifiers are working correctly. I took a combat balancing break because I was blocked by the changes to our stat system, doing some work on our Shops.


## Monetization Player vs Business (PvB)
To the uninitiated, monetization in games seems to have a sort of nefarious stigma attached to it. Players often think companies are out to milk every last cent from them, and as a result are turned away by any clear sign of monetization. This isn't without reason however, AAA companies for a long time have been known to operate as "for profit" businesses where decision making revolves around how much revenue would be generated. On the business side, developers **need** to make money so that they can continue to provide for themselves and release quality experiences (games, updates, etc.). In my opinion, the process of creating "good" monetization in games is trying to balance that tightrope of "for player" and "for business". To go too far one way would be **just as bad** as going too far the other.


Admittedly, I'm writing with a lack of expertise in this field. I released one mobile game with banner ads in the past. However, in the past 2 years I've learned about the different methods of monetization, and have been thinking more deeper about their trade-offs. On-screen ads offer a more passive style of revenue gains, but could lessen the immersion experience for the player. Developers need to think about what the important **systems** of their game are and monetize around that. Monetization methods also generally differ based on platforms. You don't see banner ads on desktops, and in-app purchases/battle passes are common across all platforms.

## Monetizing Windwalker
In Windwalker, we are planning to implement in-app purchases as the main type of monetization, and some secondary interstitial ads. Players will be able to purchase loot chests, or watch ads to refresh their shop's inventory. Because Windwalker is not a PvP game, we felt it would be okay for players to be able to purchase power with their money. We are designing for these "power purchasers" in mind, so that a high amount of spending does not negatively affect their experience. That may sound strange at first, but when game economies are not properly designed, the engagement levels of high spenders could easily drop after their first big purchase for various reasons. A simple example would be a player who bought a powerful weapon who could just run through the game without ever facing any adversity. This player would maybe have fun at first, but their engagement levels would quickly fall. In this example, the developers lost out on a lot of potential revenue because there wasn't enough thought put into how they monetized their game. 


That brings us to yet another discussion of game systems and the inter-connectivity of them. Game systems in RPG games like Windwalker have strong relationships with one another. Each system touches upon every other system in some way, and monetization is no different. In designing the monetization system in WW, I think about the effects it would have on the player experience as a whole. Loot chests will certainly make combat easier for the player, but it doesn't guarantee combat success. Players still need to think about what actions they need to make in combat (Skill vs Gear). 


{% include elements/figure.html image="https://i.imgur.com/HbC8oLZ.png" caption="Cash Shop UI WIP" %}

## Other Changes

Now for some of the other changes

### Overhaul of Stat System
We had an issue where stat modifiers were not being tracked properly. Percentage modifiers and flat stat gains/losses affected different stats in varying ways, and our old solution wasn't reliable enough to properly maintain those numbers. So, Gary completely overhauled the stat system, and is now finishing up the final touches, writing unit tests to ensure that our stat calculation design haven't changed, but give us the capabilities that we need. Before, we were modifying only the stat values themselves, and trying some tricks to maintain any modifiers, but that quickly got messy. Now that we created a **Stat** class, we added functionality to track individual modifiers for those stats.

This was a really important change because the stat system affects our core gameplay systems (Character, Items, Enemies). What's next is to regenerate our items, monsters, and continue on with balance work. 

### Other things
Gary was up to a lot lately. He worked on making the prefabs of our items show in combat! To put simply, our items visually affect the players appearance. I thankfully have a few more interviews to wrap up on, but I'll still be working on WW. 


{% include elements/figure.html image="https://i.imgur.com/pJzXorj.png" caption="Peep the gearset on this mage!" %}



Thanks for reading!

Paul

