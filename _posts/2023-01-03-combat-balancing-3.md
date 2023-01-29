---
title: Combat Balancing Part 3
tags: [Balancing, Combat]
style: fill
color: warning
description: More updates after playtesting
---
[Digest this post in Video Form Here!](https://www.youtube.com/watch?v=7j3EkYtTZhc&ab_channel=RevDevStudios)

## Intro
In this post, I highlight some of the biggest recent changes after more rigorous playtesting. I further balanced skills, made combat more fun & engaging, and used our monster database to better balance stats.


{% include elements/figure.html image="https://i.imgur.com/ggDkFsM.png" caption="Tracking manual playtest sessions" %}

## Skill Balancing
In the last blog post, I mentioned how I had to nerf "target all" offensive abilities because they were doing too much damage relative to their single target counterparts. Well, I further reduced most of those abilities after testing with various classes. When designing the skills system, we want the player to use different skills at different times, and not have one or two skills be repeated too often. There is some exception to that rule, but it is generally true. When target all abilities were too powerful, it became apparent that the player should just use them whenever they could. Often times, they would just completely wipe the enemy's side with one use. 

Skill balancing is an area of combat balancing that will be more heavily iterated on as we do more testing. I expect to add more skill variety for each class, to further the customization of skill usage in combat. Since skills cost a turn to use, a player should equip themselves with the correct set of skills that will set them up for success in combat encounters. Using a buff skill means that you miss out on an opportunity to attack, and vice-versa. Skills should be designed for general and specific use cases, rewarding the skill caster with an in-combat reward for using the skills at opportune times. This feeling is one of accomplishment and triumph that would encourage players to further engage with the game.

## Faster turns
Previously, melee attackers/melee skills required the caster to move up to a target’s feet before attacking, then running back to their beginning location. This caused an unwanted lull in combat. To remedy this, we significantly reduced the distance traveled for melee attackers, and made combat turns end much faster.

## Finding the Fun in AI
I designed the monsters to ramp up in difficulty as the player approaches the max level. This meant that in the earlier levels, most of the AI (enemies/pets) didn't have powerful skills if any at all to cast. After playtesting through many of those levels, I realized that the monster/pet AI were mostly using their basic attacks. Enemies would mostly just do a uninteresting basic attack. It also became easy to calculate in the early few seconds of combat whether or not I would succeed because of the predictable nature. There were a few times where my pet cast an ability that stunned all my enemies at a crucial time that created exciting moments, but rarely happened. 

To create more of these moments, I significantly increased the chances of AI to use skills, and also added more skills to certain monsters!

## Data Driven Balancing:
For the past few weeks of playtesting, I also had a hunch that the magic defense stat was not as powerful as physical defense. To confirm my hypothesis, I ran a simple SQL query to find out the average physical and magic damages for all monsters. While I didn’t want those numbers to be equal, they should be relatively close. I found that monsters had a significantly higher physical damage average than magical damage. This would result in the magic defense stat being less desirable than the physical defense stat, which was not my intention.

This occurred because when monsters were being generated, there was a higher bias for physical damage based stats(str, dex, phys dmg, etc) to be chosen. To quickly recap how monsters generate stats, they are first placed into archetypes that help determine what types of stats they should roll, and the likelihoods of those stats. For example: spellcaster monsters would more likely roll stats that would be in line with that archetype (int, mag def, mag dmg, etc.). Then, monsters would roll monster specific stats to further create a separation from other monsters.

So, I turned more monsters into spellcasters, and regenerated the monsters until I felt that the balance between physical and magical damages was at a good place.


{% include elements/figure.html image="https://i.imgur.com/x71Yb4f.png" caption="Tracking the various monsters on spreadsheets" %}



[Digest this post in Video Form Here!](https://www.youtube.com/watch?v=7j3EkYtTZhc&ab_channel=RevDevStudios)

Thanks for reading!

Paul

