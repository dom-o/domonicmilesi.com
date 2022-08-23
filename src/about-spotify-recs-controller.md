---
layout: templates/post.njk
sidebar: true
ord: 11
---
spotify-recs-controller is a vuejs/node web app that lets you play with the Spotify recommendation API, built solo by me.

[check it out](https://domonicmilesi.com/spotify-recs-controller) &nbsp; [github](https://github.com/dom-o/spotify-recs-controller)

## Why
This is for making playlists. Most of my playlists are built around small kernels - I'll have one or two songs I like, that well complement each other, and I'll want an hour of that vibe. What this meant in practice before was a lot of combing through the 'artists similar to this one' section. But I knew Spotify had, at least internally, better tools for this; you can hit 'create a playlist based off these songs' and it can do it. It doesn't do it particularly well in my opinion, but like I say, clearly the tools exist to make the process easier. What I wanted out of building this was to expose those tools for my own use.

## Stack
Vuejs for the frontend. I'd done some intro projects in both it and React and liked it better. I didn't realize when I started that some of the Spotify endpoints were server to server, so Node for the backend was a relatively ad hoc decision - it was lightweight, easy to get off the ground quickly and in JavaScript already so I didn't have to switch modes.

## Problems/Thought Process
Frankly, this is one of the more straightforward projects I've done. It was the most expansive thing I'd yet built with Vue and vast majority of problems faced felt like normal growing pains of learning a new frontend framework. While I was deploying, for example, I kept hitting a 404 error when navigating back to the app after logging in with Spotify. All I had to do to solve it was use the example server config in the docs. All the problems I had were like that.

## Lessons Learned
In the long run this was a good lesson that not everything I make will end up being used. Despite my high hopes, I just kinda stopped making as many playlists after I finished this. I did churn [this one](https://open.spotify.com/playlist/6czp00vV0XwGLffRWE33Ca?si=59654155a405495f) out while I was isolating after a Covid scare this year, but after that I stopped using Spotify entirely - always latent knowledge that they don't pay artists enough finally got to me. Now the app gathers dust; a lot of my hard work down the drain. Project was a reminder that sometimes it goes that way.

That being said, what you learn during the work stays with you. In addition to deeper general understanding of Vue, this helped me crystallize some ideas for [another project](https://github.com/dom-o/complex-weather-alerts). Specifically I have to pass a conditional to the server, and the server evaluates it. I'd struggled a bit to come up with a schema for the conditional, but passing the song feature parameters is the same problem. Now I've solved it here, I can plug it in easily to the other project.
