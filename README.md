
> Open this page at [https://tiilt-lab-code.github.io/lateral-quickness/](https://tiilt-lab-code.github.io/lateral-quickness/)

## Using this code

You will need three micro:bits for this project. Two micro:bits act as "anchors" placed on top of cones - they are stationary. 
A third micro:bit is the "runner", which you will carry as you
run between the two anchors.

- Set up two micro:bits as anchors by pressing the A button on each one.
- The first anchor broadcasts on channel 0. Press A+B on the second anchor so it broadcasts on channel 1.
- The third micro:bit is the runner; touch logo to start a 30-second run.
- Runner micro:bit listens for anchor radio pulses and increments score for each valid detection (strong signal).
- When the runner detects an anchor, it switches to the other
  radio channel (0 -> 1; 1 -> 0), which requires that the runner
  get to the other anchor to get the next valid detection.
- The runner physically moves between anchors to keep triggering channel toggles.
- Press B on runner to display current score.

## Run this project

To edit this repository in MakeCode and deploy it to the micro:bits,
click [here](https://makecode.microbit.org/#pub:https://github.com/tiilt-lab-code/lateral-quickness)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
