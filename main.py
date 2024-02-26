def foward(direction, spaces):
def turnLeft():
def turnRight():



while True:
    makerbit.run_motor(MakerBitMotor.ALL, 100)
    time = control.millis()
    if time > 3000:
        makerbit.stop_motor(MakerBitMotor.ALL)
