---
title: Simulating Level Up and Economy
tags: [Design, Economy, Simulation]
style: fill
color: light
description: Simulating Level Up and Economy
---

## Intro
I discovered [Machinations.io](https://machinations.io/). a few months ago when I attended a seminar documenting how game professionals simulate their game economies and system flows. I did some researching, and attended additional virtual seminars before really diving into how I might use the tool. I wanted to use machinations to help simulate the flow of EXP/gold gain in Windwalker. With the logic set up in Google Sheets, I created a diagram to simulate these things, and was pleased with the result! 

## What is being Simulated?
To dive deeper into the simulation, you could just link the image below to see me explain it on video, or continue following along. The simulation details the rewards given to the player at the end of combat. 
We factor in the following:
* Number of Enemies (60% chance to face 1, 25% for 2, 15% for 3)
* Level of Player/Monster: we assume they are the same level
* XP gained per monster
* Cost to Level Up
* Gold Dropped
* Total Value of Monster Loot (sum of gold dropped + additional loot)

We factor these things to determine when the player levels up, how much gold the player will accumulate, and how much total value the player will earn after a number of successful combat encounters.


## Machinations Diagram
[![Video](https://s4.gifyu.com/images/wwmachinationsgifeconomy.gif)](https://www.youtube.com/watch?v=rhL253x8WPY&ab_channel=PaulAn)

*Click image to open video*

## Closing Thoughts
I think machinations is a powerful tool to simulate complex economies. However, I noticed a few pain points that make me hesitant to use it often in the future. 
Pain points:
* Aligning nodes with connections can be very annoying. There's a lot of strange behavior that can occur when trying to snap connections together. It often misaligns, or points arrows in strange directions. As opposed to using tools like [Figma](https://www.figma.com/), where snapping and connecting nodes almost never results in strange behavior.
* Lack of documentation. I noticed a lot of the documentation was filled with outdated information and frequent typos.
* Lack of community. I probably could look into this more, but on their own machinations forum, I was getting 0 hits for search queries that I thought would result in many results. I tried searching for "converter problems," which yielding 0 results.
* Free Version limitations. As a free user, I'm unable to access useful indicators and further customize simulation aspects of the tool. I'm limited to only being able to visualize the data in a simple chart- which may take a few minutes to run a simulation 100 times. My guess is that it is either throttling me for being a free user, or the programming is not being run efficiently.

Visualizing Total Loot Val against Total Gold run 5 times
[<img src="https://i.imgur.com/axi1nGc.png">](https://i.imgur.com/axi1nGc.png)
*Click image to enlarge*
