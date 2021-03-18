let compta1 = 0
let compta2 = 0
let llum = 0
basic.forever(function () {
    compta1 = 0
    compta2 = 4
    llum = Math.map(input.lightLevel(), 0, 255, 0, 5)
    for (let index = 0; index < llum; index++) {
        led.plot(0, compta1)
        compta1 += 1
    }
    for (let index = 0; index < 5 - llum; index++) {
        led.unplot(0, compta2)
        compta2 += -1
    }
})
