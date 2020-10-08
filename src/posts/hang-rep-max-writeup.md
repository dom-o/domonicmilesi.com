---
partial: true
---
This is a set of rep max calculators for hangboarding based off of [this](https://www.reddit.com/r/climbharder/comments/4zrqez/1rm_estimation_for_timed_exercises_like/) reddit thread, specifically [this](https://www.reddit.com/r/climbharder/comments/4zrqez/1rm_estimation_for_timed_exercises_like/d6yaf8c?utm_source=share&utm_medium=web2x&context=3) comment:
<blockquote cite="https://www.reddit.com/r/climbharder/comments/4zrqez/1rm_estimation_for_timed_exercises_like/d6yaf8c?utm_source=share&utm_medium=web2x&context=3">
  The comparison for isometrics that I used in Overcoming Gravity is 1 repetition = 2s isometric hold. Once you know the approximate repetitions, you can plug into a 1 RM calculator

  This gives a pretty solid comparison, and it's based off a lot of my experience and coaching gymnastics/parkour for stuff like back lever, front lever, planche, iron cross, etc.
</blockquote>

A couple use notes:

1. 2"RM is the maximal weight you can hang for 2 seconds, just like 1RM is the maximal weight with which you can do 1 rep.
2. If you are doing no-hangs, just use the weight itself; if you're doing normal hangs, make sure to include bodyweight (total weight= bodyweight + weight added).
3. Sometimes these equations will spit out answers that don't really make sense, e.g. negative hang times.  Checking 'sensible outputs' mitigates that as follows:

 - no negative hang times; outputs 0 instead.
    - unfortunately some of the formulas will still output ludicrous hang times with submaximal weight.
 - when calculating hang times:
    - if the weight is more than your 2"RM, output 0 seconds.
    - if the weight is your 2"RM, output 2".
 - when calculating 2"RM: if you hang 2" with a weight, output that entered weight.
