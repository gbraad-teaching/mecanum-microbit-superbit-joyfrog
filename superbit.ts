// Relies on extension
//    https://github.com/lzty634158/SuperBit
//    https://github.com/YahboomUnofficial/SuperBit (mirror)

radio.onReceivedValueDeprecated(function (name, value) {
    if (name == "rw1") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        value,
        SuperBit.enMotors.M4,
        value
        )
    } else if (name == "rw2") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        value,
        SuperBit.enMotors.M2,
        value
        )
    } else if (name == "a1") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M4,
        value,
        SuperBit.enMotors.M2,
        0
        )
    } else if (name == "a2") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        value,
        SuperBit.enMotors.M1,
        -1 * value
        )
    } else if (name == "w1") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        value,
        SuperBit.enMotors.M2,
        value
        )
    } else if (name == "w2") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        value,
        SuperBit.enMotors.M1,
        value
        )
    }
})

basic.showIcon(IconNames.Happy)
radio.setGroup(2)
