---
layout: templates/post.njk
sidebar: true
ord: 14
---
rss-restart is a Django app that creates an RSS feed out of a list of URLs.

[check it out](https://domonicmilesi.com/rss-restart/) &nbsp; [github](https://github.com/dom-o/rss-restart)

## Why
Built this because I wanted a way to 'restart' inactive RSS feeds. It's pretty often I subscribe to something turns out not to be updating anymore - particular impetus for this project surfaced when I subscribed to James Somers's blog after reading his post on Webster's 1913 dictionary, only to watch him post one thing since 2019. I started working through his archives on my own, but started work on this bec the reading experience would be way easier for me if I could just get his RSS feed to go back and publish everything again from the beginning, like how [@YearOnEarth](https://twitter.com/yearonearth) used to restart every year or how they re-aired the Breaking Bad marathon before El Camino came out.

## Stack
Django - its feed generating framework was killer for this project - and Celery for task scheduling.

## Problems/Thought Process
Biggest problem came from a misconception I had about RSS. I thought the RSS file was an archive in itself, i.e. it contained all the entries ever published to it. The flow I envisioned was accepting the user's RSS url, parsing the feed and extracting the items, and then publishing them to a new feed on a user-defined schedule - output would be the feed url the user could subscribe to. This is not how RSS works. Most feeds only contain the last several items published, so as to save bandwidth. Ability to see items older than that in my RSS reader was because my reader cached them.

So, old plan is impossible. Given an RSS feed I can only see the 10 or so items it currently contains; I have no way of knowing what was published to it in the past. New plan: user has to figure this out. User gets the links from the blog archive or wherever; what the app does now is create an RSS feed from that list of URLs. I do think, despite the added complexity for the user, that this change made the app a more versatile tool.

## Lessons Learned
I learned quite a bit about the RSS standard; also building this reinforced for me the importance of the initial brainstorming phase - checking myself with 'is what you want to build possible with the resources you have?' continues to be a useful practice.
