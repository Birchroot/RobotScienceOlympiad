let time: number;
// moveFoward/L/R function declarations ===============
// =====================================================
while (true) {
    makerbit.runMotor(MakerBitMotor.All, 100)
    time = control.millis()
    if (time > 3000) {
        makerbit.stopMotor(MakerBitMotor.All)
    }
    
}
