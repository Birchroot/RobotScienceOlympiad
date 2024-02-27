//  Jacob if you want to rewrite any this idc==========
let commands = ["1N", "2E", "3S"]
//  moveFoward/L/R function declarations ===============
//  array looper=======================================
function commandInterpreter(cmds: string[]) {
    let splitCommand: string[];
    let distanceToMove: string;
    let previousDirection = "N"
    for (let x of cmds) {
        splitCommand = _py.py_string_split(x, "")
        distanceToMove = splitCommand[0]
        /** 
        here's my java/type script for the switch case statements.
        it wouldn't let me convert to python with them empty
        so i will just put it here for you or me to fix later
        switch(splitCommand[1]){
            case 'N':
                switch(previousDirection){
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
