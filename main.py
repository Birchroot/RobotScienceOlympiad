"""
Jacob if you want to rewrite all this idc. when i tried to
convert it to python it decided to break. og java/type script is
on the google doc i shared w/ you (Robot Tour)
"""
#write on day of competition==========================
commands = [
    '1N', '2E', '3S'
]
#=====================================================

# moveFoward/L/R function declarations ===============

# array looper========================================

def commandInterpreter(cmds: List[str]):
    previousDirection = 'N'
    for x in cmds:
        """
        this is throwing error, it didn't convert languages correctly. 
        plz add the equivalent string splitter for python.
        
        splitCommand = x.split("") 
        ^^^^^^^^^^^^^^^^^^^^^^^^^^
        """
        distanceToMove = splitCommand[0]
        """these are the switch case statements from the 
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
        """
commandInterpreter(commands)




# =========testing stuff bla bla========================
"""

while (true) {
makerbit.runMotor(MakerBitMotor.All, 100)
time = control.millis()
if (time > 3000) {
makerbit.stopMotor(MakerBitMotor.All)
}

}


"""