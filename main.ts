while(true){
makerbit.runMotor(MakerBitMotor.All, 100);
let time = control.millis();
if (time > 3000){
    makerbit.stopMotor(MakerBitMotor.All);
}
}
