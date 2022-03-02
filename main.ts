input.onButtonPressed(Button.A, function () {
    xpos += -1
    basic.clearScreen()
    led.plot(xpos, ypos)
})
input.onButtonPressed(Button.AB, function () {
    xpos += 1
    ypos += -1
    basic.clearScreen()
    led.plot(xpos, ypos)
})
input.onButtonPressed(Button.B, function () {
    xpos += 1
    basic.clearScreen()
    led.plot(xpos, ypos)
})
input.onGesture(Gesture.Shake, function () {
    xpos += -1
    ypos += 1
    basic.clearScreen()
    led.plot(xpos, ypos)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    ypos += -1
    basic.clearScreen()
    led.plot(xpos, ypos)
})
let ypos = 0
let xpos = 0
xpos = 2
ypos = 4
led.plot(xpos, ypos)
