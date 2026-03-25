// Lateral Quickness micro:bit game states and transitions

// running: 0 = not in an active timed run, 1 = run in progress
// anchor: 0 = runner mode; 1 = anchor mode
// count: successful anchor detection events in runner mode
// radio_channel: currently active radio group channel (0 or 1)
// start_time: timestamp when the runner started a timed run

let start_time = 0
let radio_channel = 0
let anchor = 0
let count = 0
let running = 0

// Initial state setup
running = 0
count = 0
anchor = 0
radio_channel = 0
radio.setGroup(radio_channel)
radio.setTransmitPower(7) // maximize range
music.setVolume(255)
basic.showIcon(IconNames.Tortoise)

// Anchor sends a packet 10x per second when anchor mode is active.
loops.everyInterval(100, function () {
    if (anchor == 1) {
        // Anchor state: show channel and broadcast pulse
        basic.showNumber(radio_channel)
        radio.sendNumber(0)
    } else {
        // Runner state: performance display and timer expiration
        if (running == 1) {
            led.plotBarGraph(count, 15)
            if (input.runningTime() - start_time >= 30000) {
                // Transition: run ends after 30s
                music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
                basic.showNumber(count)
                running = 0
            }
        }
    }
})

radio.onReceivedNumber(function (receivedNumber) {
    // Only count packets in runner mode during an active run
    if (anchor == 0 && running == 1) {
        // Keep only strong signals during close physical movement
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -40) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Breve)), music.PlaybackMode.InBackground)
            count += 1
            // Toggle channel as a challenge for lateral quickness
            if (radio_channel == 0) {
                radio_channel = 1
            } else {
                radio_channel = 0
            }
            radio.setGroup(radio_channel)
        }
    }
})

input.onButtonPressed(Button.A, function () {
    // User chooses anchor role (only possible when not running)
    if (running == 0) {
        anchor = 1
    }
})

input.onButtonPressed(Button.AB, function () {
    // Anchor quick-switch: set explicit channel 1 when already anchor
    if (anchor == 1) {
        radio_channel = 1
        radio.setGroup(1)
    }
})

input.onButtonPressed(Button.B, function () {
    // Always view current score count
    basic.showNumber(count)
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    // Start runner timed sequence when runner is idle
    if (anchor == 0 && running == 0) {
        basic.showNumber(3)
        basic.pause(1000)
        basic.showNumber(2)
        basic.pause(1000)
        basic.showNumber(1)
        basic.pause(1000)
        basic.clearScreen()
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)

        count = 0
        running = 1
        start_time = input.runningTime()
    }
})
