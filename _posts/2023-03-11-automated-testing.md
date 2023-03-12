---
title: Automated Combat Testing
tags: [combat, design]
style: fill
color: light
description: Automating combat testing, revisiting passive skills, and combat balances.
---

[Related Video!](https://www.youtube.com/watch?v=PY4WNLQtw6g&ab_channel=RevDevStudios)

## Intro
Today I'll be going over how automated testing in combat helps speed up the balancing process, the completed first iteration of all classes passive skills, and other various combat changes.

## Automated Combat Testing

As seen in previous posts/videos, I was manually logging the results of combat in a spreadsheet. This was useful because it allowed me to track specific details in combat. How many turns it took, what kinds of items the player had, how many monsters were fought, etc. I wanted to create a way to automate this sort of testing, but thought it might take too long to implement. However, as I thought about it a bit deeper, I realized that to create this sort of system wouldn't be that difficult at all. Windwalker already has a sort of "autoplay" component when it comes to allied AI fighting against enemy AI. All I had to do was to turn the player into an allied AI, and watch the magic happen. 

After I got the simulation to work properly, I added a component to this system that outputs the details of the combat encounter into a .csv file. While this sort of testing is much faster than manual testing, it isn't without its drawbacks. The AI player may not accurately simulate various player personas, although with enough effort this could be simulated. In it's current implementation, our AI controller characters do not factor in skill cooldowns, which could lead to inaccurate combat results.

In the figure below, we can see the results of the simulation for 4 different classes. (Novice, Warrior, Mage, Ranger). The sample size of these tests are quite small, but it would appear that the Mage class at level 25, with item rarity 0, loses in combat far more often than its Warrior/Ranger counterparts. This might trigger me to further examine the source of these discrepancies, and make the changes necessary to balance the classes.

{% include elements/figure.html image="https://i.imgur.com/bC7ydhW.png" caption="CSV files generated after combat result" %}

## Passive Skills Complete
I revisited our passive skills for our classes. All classes gain passive bonuses at levels 10, 30, and 45. As of today, I completed the first iteration of all 21 passive skills! These passive bonuses give players item stat bonuses (ex: Bows that Marksmen equip give 30% more stats), flat or percentage bonus stats (ex: 30% hp gain for Knights), or special effects (Mages block 25% of the first damage source in combat).


## Misc Combat Changes

#### Too Much Dodging!
As I playtested the endgame experience, I realized that a flat 33% dodge chance for all characters resulted in a negative experience. Characters were dodging attacks much too frequently. To adjust this, I added a way to increase a characters hit chance based on their DEX stat.


{% include elements/figure.html image="https://gameranx.com/features/id/40986/article/superhot-video-walkthrough/attachment/superhot_scr2/" caption="Have you ever played Superhot VR? Dodging bullets in this game is so fun" %}

#### Combat Changes
Magic based classes in Windwalker aren't meant to deal much physical damage. We removed physical damage calculations when a player used a basic attack with magic based weapons (staves, wands). This doesn't change much, since we want our spellcasting players to focus on casting their spells anyway.

Another thing I noticed from endgame testing was that ALL characters were dealing way too much damage! If you didn't dodge, you were dead! I made a few big changes to slow down that endgame experience so that players had opportunities to make multiple meaningful choices. The biggest change was in adjusting the effectiveness of defense/resistance stats so that all characters now take less damage. 




[Related Video!](https://www.youtube.com/watch?v=PY4WNLQtw6g&ab_channel=RevDevStudios)

Thanks for reading!

Paul

