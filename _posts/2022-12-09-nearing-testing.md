---
title: Approaching Closed Testing
tags: [Design]
style: fill
color: info
description: Nearing bigger testing phases.
---

## Intro
As we approach the testing phase for Windwalker, we are working hard to iron out the small details that will help make our game better. In this post, I'll be going over some of those things I've done to help make the experience more enjoyable.

## NPCs
Previously, it was difficult to actually spot all of the NPCs. The playable area isn't very big, but I felt there wasn't enough focus on the available NPCs. To solve this, I added blinking indicators above each NPC, so that the players will find them easier to spot. Bingo! Additionally, I experimented with some various ways to surface a "picture" of an NPC when in dialogue with them. I first tried with 2d images, but felt it was lacking in animations. I decided to use Unity's Render Texture to overlay a live renderering of the NPC when in dialogue with them. 

Using a render texture in the way I did involved me creating a secondary camera source that I can manually place in the world. I created as many as I had NPCs, and manually placed them in front of each NPC. Then, when a player triggers a dialogue with an NPC, the NPCs "camera" is surfaced in that dialogue. Render Textures also allow me to ignore other objects that I don't want rendered in that area. I clipped the player out so they can't randomly appear in the NPC's dialogue box if they are in between the camera and NPC.

{% include elements/figure.html image="https://i.imgur.com/uwntDyw.png" caption="NPC dialogue box" %}

I updated ground textures for NPCs to create a sense of uniqueness between those zones. I also added multiple housing units for the NPCs so they have a place to rest when you are logged out. 

{% include elements/figure.html image="https://i.imgur.com/i1z8BJZ.png " caption="New merchant ground texture" %}

## Map Bounds

For some reason I am eager to dive into this next problem. The problem was that we had invisible map bounds, which was less than ideal. My ideal solution would probably still be one where the map bounds fade in as the player gets closer to bounds, but I am convinced that would require the game engine to calculate the distance from the bounds to the player on every frame, essentially making it less optimal in a performance sense. So, after doing some internet surfing, I decided on creating a secondary boundary for each of the 4 map bounds (NESW). In my figure below, **1(in red)** represents the actual boundary and **2(in blue)** represents the invisible trigger boundary.

When the player enters the 2nd boundary, it triggers the 1st boundary to be visible. It's important to note that in the figure below I already made the 1st boundary visible for visibility's sake. When the player then leaves the 2nd boundary back towards the center of the playable area, the 1st boundary is once again invisible so the player can enjoy the environment without seeing a random boundary that can take away from the immersion.
{% include elements/figure.html image="https://i.imgur.com/WBhJBEe.png"  caption="Map Bounds" %}


## What's Next

After we can resolve some issues we are having with building our game on certain devices, we will begin some heavy internal testing with our combat scene. We need to test all of our abilities and how they interact in every possible situation and iron out a more polished vertical slice. We want to be at a point where we can begin testing our gameplay progression and make any changes we need to before we begin testing on a bigger scale.


Thanks for reading!

Paul

