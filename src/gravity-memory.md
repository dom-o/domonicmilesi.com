---
layout: gravity-memory.njk
sidebar: true
ord: 2
---
<p>It's the card game <a href="https://en.wikipedia.org/wiki/Concentration_(card_game)">Memory</a>, but the cards are all falling through the air. You have to stop them from falling while you play. The card designs are inspired by <a href="https://rhymesayers.com/artists/aesoprock">Aesop Rock</a>'s old Snapchat stories; they had a similar witchy feel.</p>
<p>If this is really easy for you, please share your secrets (<a href="https://twitter.com/messages/compose?recipient_id=800796177604100096">really do</a>). This is full-on impossible for me after 12 cards.</p>
<p>I made it in vanilla javascript, using <a href="https://brm.io/matter-js/">matter.js</a>. Can be found <a href="https://github.com/dom-o/gravity-memory">on github</a>.</p>
<p>
  Click cards to stop them from falling.
  Match like cards to clear them.<br/>
  'q' to knock all cards upwards.<br/>
  '+' to increase the number of cards.<br/>
  '-' to decrease the number of cards.<br/>
  'w' if you don't like the pictures.<br/>
</p>
<center>
  <canvas id="canvas" style="border: 1px solid"></canvas>
</center>
