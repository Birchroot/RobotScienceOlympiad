//  Jacob if you want to rewrite all this idc==========
//  moveFoward/L/R function declarations ===============
//  array looper=======================================
/** 
ok so when i tried to convert
my js (technically typescript) 
to python it wouldn't let me, i had to put the empty
switch-case statements in a comment, but then everything 
got scrambed when i converted languages. the original
javascript (which is errorless) is on the Robot Tour 
google doc I shared w/ u. maybe i'll fix this mess 
later or you can if you want.

 */
let commands = ["1N", "2E", "3S"]
function commandInterpreter(cmds: string[]) {
    let splitCommand: string[];
    let distanceToMove: string;
    let previousDirection = "N"
    /** 
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
    }
    
 */
    for (let x of cmds) {
        splitCommand = _py.py_string_split(x, "")
        distanceToMove = splitCommand[0]
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
