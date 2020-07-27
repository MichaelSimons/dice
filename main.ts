input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
function RollDie () {
    for (let index = 0; index < 4; index++) {
        DieValue = randint(1, 6)
        if (DieValue == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (DieValue == 2) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . #
                `)
        } else if (DieValue == 3) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . #
                `)
        } else if (DieValue == 4) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                `)
        } else if (DieValue == 5) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                `)
        } else {
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                `)
        }
    }
}
input.onGesture(Gesture.Shake, function () {
    led.stopAnimation()
    RollDie()
})
let DieValue = 0
basic.showArrow(ArrowNames.North)
basic.showString("SHAKE ME")
RollDie()
basic.clearScreen()
