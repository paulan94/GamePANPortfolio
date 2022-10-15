---
title: Misc Changes Pt. 2
tags: [Systems, UI, UX, ENV]
style: fill
color: warning
description: Updating the different systems, environment, and UI/UX.
---

## Intro
In this post, I'll be going over some of the various changes we've made over the last week. As we begin to iron out our core features/systems, issues are brought to light that we have to solve for. With the addition of NPCs, we have to trigger specific interactions, as well as update our economy flow to account for any changes to the economy being made.

## Systems Design
Windwalker's core features are heavily combat focused. Players gain power through leveling up and acquiring better items. As a designer, I need to be able to understand how much value players are gaining based on their actions so I can aptly balance the different systems. In my last post, I referenced a valuation of the boss token (the trigger for boss encounters). Since then, we've also included a small chance to trigger a boss encounter during a normal combat encounter- which is priced into the game's economy design (value of that small chance at the player's level). A small change like this increases the value of the normal combat encounter, so I may have to adjust some of the regular encounter's total value. The different systems are interlinked through the game's economy, and I need to understand the relationships systems have with each other to be able to balance things in what I think is meaningful.

## Encounter Updates
Mentioned above, there is now a small chance to trigger boss encounters in a normal encounter. This adds to a sense of anticipation for the player when queuing up a normal combat encounter. We have plans to add other random encounter types in the future to spruce things up, but for now this will suffice as a sort of testing on the feeling of anticipation. 

We've introduced a factor of difficulty in boss encounters by adding a chance for multiple bosses to spawn. This chance will be low at first, but may be a good way for us to increase the difficulty for more geared players. We currently are matching players against enemies based on level alone, but for max-level players, we are considering an approach that factors in power level instead. The decision to use level alone is good for now because it allows the players to progress at their own pace. Player's can't generally slow their leveling since they don't decide what level monsters they fight, but this system also allows for lesser geared players to catch up. Monsters are generally weaker at earlier levels to give players a ramping up period where they can learn the game's systems before the difficulty increasing at later levels.


## Updating the Environment
I spent probably 10+ hours rearranging and updating our island environment. I had a lot of fun moving things around to make things look pretty, but I was not happy with what I ended up with. I pulled an older environment asset I used to use and built on top of their already beautiful low poly environment.


{% include elements/figure.html image="https://i.imgur.com/IQVaHuZ.png" caption="Lovely URP Env modified by yours truly" %}
[Unity Asset Store Link](https://assetstore.unity.com/packages/3d/environments/lowpoly-environment-nature-pack-free-187052)

## Combat UI/UX
**Problem**\
I often ask my girlfriend about UX related design decisions due to her professional background. I wanted to solve for a problem we had regarding too many damage numbers being visible. We were displaying up to 6 damage types per character at times that would most likely be confusing for players. 

**Rethinking the Old Solution**\
I initially "solved" this problem a week ago by greatly reducing the chances of elemental damage types to show in items, as well as limiting the type of damage you could do with a basic attack (physical weapons like swords/bows can only deal physical + elemental damages, but not magic damage, and magical weapons like wands/staves can do magical + elemental damages but not physical damage). Still, the damage text UI looked quite clunky, and confusing with numbers in different colors. I instinctively felt like this change wouldn't suffice, because it  diminished the effectiveness of the magic damage stat for certain classes. I showed my girlfriend some examples of other mobile games that show a lot damage text, and she was humorously disgusted by lack of accessibility when it comes to mobile game UI/UX design.

**New Solution**\
I decided to rollback on my earlier solution and allow magic damage to be dealt with physical weapons, as well as the other way around. In addition, I decided to combine elemental damage and display them along with magic damage, since it technically is a sort of "magic" damage. The elemental damage to elemental resistance damage calculation remains the same, but is now grouped together in the damage text UI for visual cleanliness purposes. There's still  work to be done here, as the colors and font don't appeal to our theme, but it remains in a much better state than before.

{% include elements/figure.html image="https://i.imgur.com/O9NfSqb.png" caption="Old vs New Damage Text UI" %}

**Hp/Mp Bars**\
Related to the damage texts, another things players would have to track on the screen are hp/mp bars. Initially, I had it set to display hp/mp for all characters, but currently Windwalker AI don't actually use MP in the backend. If enemies were to use MP, it would be interesting to add skills that drain MP, to create another layer of gameplay (players can decide if draining an enemy's MP is a good use of their turn), but this is currently out of scope. With this into consideration, it wasn't important to display an additional bar for potentially 5 more characters in the battlefield. Removing MP bars from enemies and allies reduces the amount of clutter players would have to track on their small mobile screens. 

Then came the discussions on whether or not we should even display damage at all. Were hp bars not enough? Well... Player's wouldn't know what type of damage they dealt was significant. Was I playing as a spell sword class and doing 90% of my damage as magic or physical? You could argue this same reasoning to bring back the 6 damage types in the UI, but there has to be a fine line somewhere. 


{% include elements/figure.html image="https://i.imgur.com/2UMIqCU.png" caption="Hp/Mp bars that scale based on distance to camera" %}