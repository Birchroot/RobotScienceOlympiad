//  Jacob if you want to rewrite all this idc==========
//  moveFoward/L/R function declarations ===============
//  array looper=======================================
let commands = ["1N", "2E", "3S"]
function commandInterpreter(cmds: string[]) {
    let splitCommand: string[];
    let distanceToMove: string;
    let previousDirection = "N"
    for (let x of cmds) {
        splitCommand = _py.py_string_split(x, "")
        distanceToMove = splitCommand[0]
        /** these are the switch case statements from the 
        java/typescript code that I wrote. it wouldn't
        let me convert it to python with them empty. 
        one of us can fix this some other time.
        switch (splitCommand[1]) {
            case 'N':
                switch (previousDirection) {
                    case 'N':
                    case 'E':
                    case 'S':
                    case 'W':
                }
            case 'E':
                switch (previousDirection) {
                    case 'N':
                    case 'E':
                    case 'S':
                    case 'W':
                }
            case 'S':
                switch (previousDirection) {
                    case 'N':
                    case 'E':
                    case 'S':
                    case 'W':
                }
            case 'W':
                switch (previousDirection) {
                    case 'N':
                    case 'E':
                    case 'S':
                    case 'W':
                }
        
 */
    }
}

commandInterpreter(commands)
//  =========testing stuff bla bla========================
/** 

while (true) {
makerbit.runMotor(MakerBitMotor.All, 100)
time = control.millis()
if (time > 3000) {
makerbit.stopMotor(MakerBitMotor.All)
}

}



 */
