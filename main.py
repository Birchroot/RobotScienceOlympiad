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

def forward(strength):
    print("WOW")

def right():
    print()

def left():
    print("WOW")

def commandInterpreter(cmds):
    previousDirection = 'N'
    for x in cmds:
        temp = list(x)

        strength = temp[0]
        direction = temp[1]

        if(previousDirection == 'N'):
            if(direction == "N"):
                forward(strength)
            elif(direction == "E"):
                right()
            elif(direction == "S"):
                right()
                right()
            elif(direction == "W"):
                left()

        if(previousDirection == 'E'):
            if(direction == "N"):
                left()
            elif(direction == "E"):
                forward(strength)
            elif(direction == "S"):
                right()
            elif(direction == "W"):
                right()
                right()

        if(previousDirection == 'S'):
            if(direction == "N"):
                right()
                right()
            elif(direction == "E"):
                left()
            elif(direction == "S"):
                forward(strength)
            elif(direction == "W"):
                right()
            
        if(previousDirection == 'E'):
            if(direction == "N"):
                left()
            elif(direction == "E"):
                forward(strength)
            elif(direction == "S"):
                right()
            elif(direction == "W"):
                right()
                right()


        if(previousDirection == 'W'):
            if(direction == "N"):
                right()
            elif(direction == "E"):
                right()
                right()
            elif(direction == "S"):
                left()
            elif(direction == "W"):
                forward(strength)

            

        

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