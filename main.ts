let move = 0
input.onButtonPressed(Button.A, function () {
    move = 0
})
input.onGesture(Gesture.Shake, function () {
    move += 1
    led.stopAnimation()
})
basic.forever(function () {
    basic.showNumber(move)
    if (move > 90) {
        music.playMelody("C D E F G A B C5 ", 120)
    }
})
