
enum SIZE {
    //% block="29*29"
    1,
    //% block="58*58"
    2
}

enum LINE {
    //% block="1"
    1,
    //% block="2"
    2,
    //% block="3"
    3,
    //% block="4"
    4
}

enum BTN {
    //% block="A"
    A,
    //% block="B"
    B,
    //% block="A+B"
    AB
}

enum IO {
    //% block="D2"
    D2,
    //% block="D3"
    D3,
    //% block="D4"
    D4,
    //% block="D5"
    D5,
    //% block="D6"
    D6,
    //% block="D7"
    D7,
    //% block="D8"
    D8,
    //% block="D9"
    D9
}

enum DIRECTION {
    //% block="正转",
    正向,
    //% block="反转",
    反向,
    //% block="不转",
    不转
}



//% color="#9933cc" iconWidth=50 iconHeight=40
namespace led {
    //% block="set pin [IO1] and [IO2] as positive and negative pole, respectively. Then select [DIRECTION] to rotate" blockType="command"
    //% IO1.shadow="dropdownRound" IO1.options="IO" IO1.defl="IO.D6"
    //% IO2.shadow="dropdownRound" IO2.options="IO" IO2.defl="IO.D7"
    //% DIRECTION.shadow="dropdownRound" DIRECTION.options="DIRECTION" DIRECTION.defl="DIRECTION.正向"
    export function servoBeg(parameter: any, block: any) {
        let direction = parameter.DIRECTION.code
        let io1 = parameter.IO1.code
        let io2 = parameter.IO2.code


        let pin1
        switch(io1) {
            case "D2":
                pin1 = 25
                break;
            case "D3":
                pin1 = 26
                break;
            case "D4":
                pin1 = 27
                break;
            case "D5":
                pin1 = 9
                break;
            case "D6":
                pin1 = 10
                break;
            case "D7":
                pin1 = 13
                break;
            case "D8":
                pin1 = 5
                break;
            case "D9":
                pin1 = 2
                break;
        }

        let pin2
        switch(io2) {
            case "D2":
                pin2 = 25
                break;
            case "D3":
                pin2 = 26
                break;
            case "D4":
                pin2 = 27
                break;
            case "D5":
                pin2 = 9
                break;
            case "D6":
                pin2 = 10
                break;
            case "D7":
                pin2 = 13
                break;
            case "D8":
                pin2 = 5
                break;
            case "D9":
                pin2 = 2
                break;
        }

        switch(direction) {
            case "正向":
                Generator.addCode(`digitalWrite(${pin1}, HIGH);`);
                Generator.addCode(`digitalWrite(${pin2}, LOW);`)
                break;
            case "反向":
                Generator.addCode(`digitalWrite(${pin1}, LOW);`);
                Generator.addCode(`digitalWrite(${pin2}, HIGH);`);
                break;
            case "不转":
                Generator.addCode(`digitalWrite(${pin1}, LOW);`);
                Generator.addCode(`digitalWrite(${pin2}, LOW);`);
                break;
        }

    }


}
