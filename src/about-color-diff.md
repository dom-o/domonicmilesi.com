---
layout: templates/post.njk
title: Color Differentiator Write-up
date: 07/07/2022
sidebar: true
---
This is a pure javascript app made to, out of a list of colors, pick the ones that have maximal color difference. I built this for use by the setting team at the University of Pittsburgh climbing wall.
<!-- pure js app to, out of a list of colors, pick groups of a given size that are have maximal color difference -->

[check it out](https://domonicmilesi.com/colors) &nbsp; [github](https://github.com/dom-o/colors)

## Why
Like I say I built this for the routesetting team at the Pitt climbing wall, shortly after I became the head routesetter there. The goal of routesetting is to create fun, challenging, yet safe climbs for the wall patrons. Industry standard has now shifted to monochromatic setting, but at the time we used [taped setting](https://spotsettingblog.wordpress.com/general-info/tape/): you set a climb by bolting holds to the wall. You mark which holds are part of your climb with colored tape. You gotta be sure to mark adjacent or overlapping climbs with different color tapes, so the climbers can tell them apart.

We were not good at the last part; poorly chosen tape colors was a common customer complaint. Solution as I saw it was to make a master palette - instead of whatever the setter was feeling that day, climbs get marked with colors that we've calculated up front to be as visually distinct from each other as possible. This app was to help with that calculation.

## Stack
At first this was just a python script with the color difference formulas. I built it out into a flask app, and then a React app - mostly as a learning project for both those frameworks - and for deployment on this site I did a plain JS rewrite.

## Problems/Thought Process
Crux of this project revolved around the algorithm for generating the color palette. At a high level, I have _n_ individual colors. From these colors I get all the possible color pairs (we mark every climb with double tape, which allows for more dense sets, i.e. more climbs per section of wall). Then I pick a number of color pairs that are most distinct from each other.
For generating the pairs I used [Alistair Israel's algorithm](https://alistairisrael.wordpress.com/2009/09/22/simple-efficient-pnk-algorithm/). Then I had to decide how best to calc the difference between pairs - the color difference formulas work for individual colors, e.g. red v. black, but I needed to know the difference between, say red with a yellow tail and black with a green tail. I settled on taking the weighted average of the head color difference and the tail color difference and weighting the head color more heavily.  
After this the meat: finding most distant pairs. At its heart this is a variation on the farthest neighbors problem (from n points pick k points that are most distant). The cruc difference is you can't easily map the points to euclidean space(?). A lot of the clever methods rely on being able to do this; you can find the two most distant points by traversing the convex hull in a certain way, and so on. colors don't work this way. the intuitive method here is to map (r,g,b) to (x,y,z), where you can calculate the spatial distance between points - there was an early version of the color difference formulas that did just that - but


High level overview is thus: from  First I had to decide how to calc the difference between groups of colors - the color distance formulas work for single colors, but since we mark climbs with double tape we had to be able to figure the difference between say, black with a yellow tail and red with a blue tail. Taking the weighted average of the head color difference and the tail color difference, weighing the tail difference less heavily than the head, produced results that . After this the problem is farthest neighbors - from n points, pick k points that are farthest apart from each other. The cruc difference is that these points cannot be mapped easily to euclidean space(?). A lot of the clever methods rely on being able to do this; you can find the two most distant points by traversing the convex hull in a certain way, and so on.

First, individual colors don't work this way - there was in fact an early version of the color difference formulas that mapped (r,g,b) to (x,y,z) in a 3d plane, and called the physical distance between the points color difference;

## Lessons Learned
First, I wanna say that this did solve our business problem. We were able to generate a master tape palette and we used it for all setting during the rest of my tenure at the wall; we got a lot of appreciative customer feedback on the change, talking about how much better the taping had become. The react version of this app is still up on the climbing wall computer. They started buying a new brand of tape with different colors a year after I left, and used this then for their new palette; I've lost contact with the setting team since then, but I hope it's still serving them well.
