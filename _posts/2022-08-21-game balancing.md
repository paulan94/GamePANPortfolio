---
title: Balancing Stats, Skills, Items
tags: [Balancing]
style: fill
color: danger
description: Making sense of balancing...
---

## Intro
This will be the first of the Random Devlog series where I cover different types of changes that have been going on with Windwalker. The main focus since the last post has been on balancing. I began my day around a week ago looking to balance our existing passive skills list. I wrote in a previous post about how I balance stat gains on items, but here's a quick TLDR! (balancing stat gains for each stat by breaking them down to a single number. ex: 1 str = 1 item level, 2.5 phys dmg = 1 item level) It's always interesting for me to see how so many of the game's systems affect one another, and I gain so much more appreciation for all the games out there that do it on a much grander scale.

## Balancing Passive Skills
With this system set, I began to come up with item level gains for each of the passives. Passives that gave fixed stat bonuses were easy to do, but others had effects that scaled with different stats (% stat increases, % bonus stats from items, etc), and a few were very difficult to calculate (chance to double cast skills, passively hit random enemy after turn, etc).

In hopes to simplify things for myself, I created a spreadsheet that helped me visualize every class' base stat gain as they leveled, shown below.

{% include elements/figure.html image="https://i.imgur.com/QhMW0WR.png" caption="Class specific stat gains per level!" %}

This sheet helped me calculate average stat levels at a certain level, but it would be hard to know the exact average because I wouldn't know about which items they were using. To get a better sense, I could generate every item type at every level and then average them to get a general sense of stat increases by level. However, I'm not convinced that would be extremely beneficial because different classes would use different items. I was able to create rough estimates to understand where stats could be at certain levels, and get a sense of how powerful a passive ability would be upon level of acquisition, as well as at max level. With this I could make some abilities start out weaker, but gradually become very useful at later levels.

## Balancing Stats
With the sheet I had created, I noticed a glaring problem with our existing stat system. The problem was that by around level ~50, most classes would easily reach the max dodge chance, and almost max for crit chance. This was because I hadn't done any economy research when creating the initial stat gain system, so each point of dex was giving too much crit/dodge. Easy fix- I just lowered that number until crit/dodge chances were much more difficult to reach their max chances. Data driven decision making!

I realized too, that our initial damage formula was mostly a copy+paste job from the popular DnD. I revisited our damage calculations and thought about how if player's gain damage stats and defense stats at a similar rate, they should probably deal more damage, because dealing the same amount of damage at higher levels didn't exactly feel right for our game. Another thing to factor in would be hp gain per level, so I put our damage dealing calculations to test, and it passed!

Rough Formula: (Attacker DMG * Attacker DMG) / (Attacker DMG + Defender DEF)

## Item Generation
This week I made a few changes to item generation, as one might expect with all these stat changes! Our current system creates an item by adding a stat for each level of rarity tier. Commons get 1 stat and ultra rares get 5 stats. However, this may cause a sort of imbalance if a weapon gets 5 stats that are all phys dmg. I created a retry mechanism that checks to see if a stat already exists on that item, and if it does I try to pick a new stat. I created the system so I could decide how often this retry mechanism should trigger. If I were to set it for a high amount of retries, the chances of getting the same stat twice would be near impossible. I also am playing with balancing the chance of a duplicate stat by reducing the amount gained of the duplicate stat by 25%. With our current system, the retry mechanism triggers twice. 

## Validating Item Generation
I had a good sense of how our items would look like in terms of power level, but I wanted to make sure I validated my work. I created a Unity Editor tool to allow myself to generate 100s of items at once with varying parameters like item type, min/max level, item rarity, etc. After generating 500 items at the highest rarity, 15/500(3%) items had duplicate stats, which gave me a good sense of the likelihood of duplicate stats. I also generated 1000s of items at varying rarities to get an average of power level gain per level.


{% include elements/figure.html image="https://i.imgur.com/eWnxYiW.png" caption="Editor Tool for Item Generation" %}

I also needed to ensure that I was accounting for player's endgame stats. Players shouldn't easily be able to achieve max crit/dodge rates, so I lowered the average stat gain for the highest tier rarity than it was previously. Averaging stats give a good metric for some data driven decisions, but they are by no means the end-all be-all.

## Documentation, Documentation, Documentation!
With the various changes I mentioned here, it would've been a nightmare to try to figure out every file/document that needed to be modified with these newer stat modifiers, etc. Although I'd consider us fairly organized with using tools such as Git, Trello, Sheets, Docs, etc., it's still a challenge. I try to link related tasks and documents together, so I can make a change and then move on chronologically through those mediums to make the subsequent changes.


## Other Changes
- Berserker class has a passive that pushed for them to dual wield weapons, but this left out any warrior second class to use 2h melee weapons. Knights favored shields, and spellswords favored sword/wand combos, so I had to adjust the berserker passive to favor both dual wielding and 2h melee weapons.
- Elemental damage stats can only be found on a few item types, and their chances were lowered greatly because it didn't make sense for every player to deal 6 types of damage each regular attack.


{% include elements/figure.html image="https://i.imgur.com/Rm6zCi9.png" caption="Passive skills and their estimated item level gains. (Beastmaster OP?)" %}
