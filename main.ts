basic.forever(function () {
    basic.showNumber(mooncar.LineFollowerSensor())
    if (mooncar.LineFollowerSensor() != 3) {
        if (mooncar.LineFollowerSensor() == 1) {
            mooncar.MoonCarLR(5, 10)
        }
        if (mooncar.LineFollowerSensor() == 2) {
            mooncar.MoonCarLR(10, 5)
        }
        if (mooncar.LineFollowerSensor() == 0) {
            mooncar.MoonCarGo(mooncar.Direction.direct1, 10)
        }
    } else {
        mooncar.MoonCarGo(mooncar.Direction.direct2, 7)
    }
})
