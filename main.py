#Jacob if you want to rewrite all this idc

#moveFoward/L/R function declarations ===============
def foward():

def turnLeft():

def turnRight():


#=========testing stuff bla bla=========================
while True:
    makerbit.run_motor(MakerBitMotor.ALL, 100)
    time = control.millis()
    if time > 3000:
        makerbit.stop_motor(MakerBitMotor.ALL)