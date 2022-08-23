---
layout: templates/post.njk
sidebar: true
ord: 12
---
juggle-skill is a visualization of the relationships between the [Library of Juggling](https://libraryofjuggling.com/) tricks, built solo by me.

[check it out](https://domonicmilesi.com/juggle) &nbsp; [github](https://github.com/dom-o/juggle)

## Why
I built this to inform my own juggling. I'm a hobby juggler and I realized my learning was somewhat haphazard. I learned cascade first and then juggler's tennis, like everyone else, but my progress thereafter had involved trawling Library of Juggling, picking a 3 ball trick that looked cool or had a fun name, and trying to learn that. Building this app was an attempt to organize the tricks and see if I couldn't get a sense of the more foundational ones, so I could learn them in an order that'd let them build upon each other more.

## Stack
I've played around with scrapy in the past, so I dusted that off to pull data from Library of Juggling. I looked at several tree-specific libraries initially, since I thought I was going to be working with tree charts, but I settled on d3. I figured it being more general would transfer better to other projects later, plus there were more learning resources for it than for the others.

## Problems/Thought Process
My problems mostly came from not understanding the shape of the data. The scraping yielded this list of the tricks themselves and which tricks were prerequisites for each other. I thought this data would be heirarchical. I started the project thinking the end product would be a skill tree, and like I say, I even considered several skill tree specific libraries before settling on d3. Turned out not to be the case; tree chart wasn't suitable since there were so many relationships between nodes outside of the parent-child one. The whole thing looked more like a dense graph, which is what I tried next.

Graph was better, and made it easier to indicate more complex relationships; I could include edges for optional prerequisites vs required ones, as well as edges between tricks that weren't prereqs necessarily but were similar to each other. The con here was that since the graph was so dense, it was more suited to a high-level broad look at the shape of the data; it was hard to zero in on any one trick. Settling finally on the adjacency matrix solved that problem as well.

My next issue was switching to drawing on canvas. d3 draws either on canvas or as svg, but performance-wise svg gets quite sluggish once you have several hundred elements, which I did. svg is easier for interactivity though, since you can add listeners directly to the elements; otherwise you have to add listeners to the whole canvas and use the mouse position to determine what's being interacted with. It's also hard to erase on canvas without clearing the whole thing. I could add/remove elements from the svg for the hover effects; when I made the switch I ended up using an entire separate canvas for them.

## Lessons Learned
Project was my first time using d3; obviously now I have a better grasp on it. While I was deciding whether or not to use it I found something advising against, saying that what most people do is find an example that's kinda close and tweak it. That does ring true for me, for better or worse, but I'm excited to dig deeper into the library next project.

More importantly project has informed my approach to dealing with unknown data sets - I gotta be more exploratory. I wasted so much time thinking I knew what the data contained and being wrong than I would have if I'd spent some time up front getting more acquainted with it.
