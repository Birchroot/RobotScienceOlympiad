"""move 25cm
motion.drive(7.5, 1)
control.wait_micros(300000)
motion.drive(7, 7)
control.wait_micros(1290000)
motion.stop()
"""
"""move 50cm
motion.drive(8, 2)
control.wait_micros(290000)
motion.drive(8, 7)
control.wait_micros(800000)
motion.drive(9, 9)
control.wait_micros(2000000)
motion.stop()
"""
#these functions are under 'motion' in the k8 library, which i added
def forward(strength):
    for x in range(strength):
        print("FORWARD")

def right():
    print("RIGHT")

def left():
    print("LEFT")

#Loops through and interprets the list 
def commandInterpreter(cmds):
    previousDirection = 'N'
    for x in cmds:
        temp = list(x)

        strength = int(temp[0])
        direction = temp[1]

        print("Prior direction: " +previousDirection)
        print(strength)
        print(direction)

        if (previousDirection == 'N'):
            if (direction == "N"):
                forward(strength)
            elif (direction == "E"):
                right()
                forward(strength)
            elif (direction == "S"):
                right()
                right()
                forward(strength)
            elif (direction == "W"):
                left()
                forward(strength)

        if (previousDirection == 'E'):
            if (direction == "N"):
                left()
                forward(strength)
            elif (direction == "E"):
                forward(strength)
            elif (direction == "S"):
                right()
                forward(strength)
            elif (direction == "W"):
                right()
                right()
                forward(strength)

        if (previousDirection == 'S'):
            if (direction == "N"):
                right()
                right()
                forward(strength)
            elif (direction == "E"):
                left()
                forward(strength)
            elif (direction == "S"):
                forward(strength)
            elif (direction == "W"):
                right()
                forward(strength)

        if (previousDirection == 'W'):
            if (direction == "N"):
                right()
                forward(strength)
            elif (direction == "E"):
                right()
                right()
                forward(strength)
            elif (direction == "S"):
                left()
                forward(strength)
            elif (direction == "W"):
                forward(strength)

        previousDirection = direction

#EDIT THIS FOR MOVEMENT
commands = [
    "1N", "2N","2E", "3S"
]

commandInterpreter(commands)