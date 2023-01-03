---
title: Balancing Combat through Testing
tags: [Design]
style: fill
color: light
description: Finding the fun in combat!
---

## Intro

In this post, I'll be discussing recent changes that have been made to the combat system through some initial testing. Monsters were either too strong, or too weak, and in some cases the range of certain monster's stats were too high in variation. This has been some of my favorite moments of the production phase since I was able to play with the various class skills and encounter unique monster types where I had to think about what my optimal turn might be. 

## Debug Tools

Having the proper set of debug tools could save so much time during production! I was struggling with testing specific combat encounters because I would have to manually equip certain item sets to have a good estimation of how powerful a character would be at a given level. To remedy this sort of manual work, we created a testing tool that would allow me to populate my character with items pulled from our database of 100k+ different items. With this tool, I could choose the item type, rarity, level, and it would update my stats in real time to factor in those stat bonuses. I could now test how combat encounters would feel like at various stages of the game. Additionally, I added debug buttons to heal the player and enemy to full to allow for a more flexible testing experience. 

[Video Link of Equipping Items in Combat](https://youtu.be/DKCUivkRIzU?t=505)


{% include elements/figure.html image="https://i.imgur.com/NYvhjv2.png" caption="Debug Panel circled in blue" %}


## Combat Changes

During the initial testing phases, the player would lose 50% of the combat encounters from the get-go! I updated the player's first skill to have a stun chance, and made adjustments to the monster's stats so that the player would be heavily favored for their first few encounters. In addition, player's had a chance to fight 2-3 enemies for their first combat encounter. In those cases, they were essentially sent to their death sentence, which was not the experience we were going for. To remedy this, I ensured that players would only face 1 monster until they were adequately leveled up and more experience in combat. 

I made various stat adjustments across the board. The Novice class was gaining a boost in stats per level that was greater than they would get after they actually advanced to their first main class. However, I couldn't just lower these stats because all of the mana costs were specifically matched to accommodate for the previous stat gains. My solution was to lower the primary stat gain, but mimic the hp/mp gain so that I wouldn't have to adjust those mana cost for skills. I also clamped monsters to have a base minimum hp based on their levels, since there were some instances where higher level monsters would have extremely low health values relative to other monsters at the same level.

I added 2 skills to the Novice class, to allow for the player to have a higher degree of flexibility between combat decisions. 


## Changes to Come

The initial testing phase allowed me to take note of multiple issues with our combat system. In the next coming weeks, I'll be working to fix these. These were some of the biggest things I noted that will be worked on.

- Summoned units are too powerful: lower their scaling probably
- Class Balancing (esp with defensive capabilities, knights are unkillable, and marksman get one-shotted often)
- Test with pets in combat: most players will have pets at a certain level
- Speed up turns: combat could take too long
- Add functionality to instantly go to next combat encounter?
- Visual bugs: hp/mp bars not visible
- Add more monster behavior customization (ghosts dont take physical dmg, etc.)


## Basic Classes Combat Videos

3 videos that showcase the initial classes combat capabilities.

[Mage](https://www.youtube.com/watch?v=hoI4E1q4o7w&ab_channel=RevDevStudios)\
[Ranger](https://www.youtube.com/watch?v=rcvHQSIDzO8&ab_channel=RevDevStudios )\
[Warrior](https://www.youtube.com/watch?v=GLTC2c3tuW0&ab_channel=RevDevStudios )


Thanks for reading!

Paul

