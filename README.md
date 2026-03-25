
> Open this page at [https://tiilt-lab-code.github.io/lateral-quickness/](https://tiilt-lab-code.github.io/lateral-quickness/)

## Using this code

You will need three micro:bits for this project. Two micro:bits act as "anchors" placed on top of cones. A third micro:bit is for you, the runner!

- Set up two micro:bits as anchors (A and B).
- Each anchor is configured with the same project code and put into anchor mode (press A).
- Anchor devices alternate broadcast channel each time they are heard by the runner.
- The third micro:bit is the runner; touch logo to start a 30-second run.
- Runner micro:bit listens for anchor radio pulses and increments score for each valid detection (strong signal).
- The runner physically moves between anchors to maintain the path and keep triggering channel toggles.
- Press B on runner to display current score.

## Run this project

To edit this repository in MakeCode and deploy it to the micro:bits,
click [here](https://makecode.microbit.org/#pub:https://github.com/tiilt-lab-code/lateral-quickness)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
