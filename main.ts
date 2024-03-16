let commands = ["START", "1E", "2S", "2W", "1N", "2E"];

let previousDirection = "N";

let mu = 0.81; //increase to go faster

let turnMu = 1; //decrease for slower turns, increase for faster

function forward25(strength: number) {
    motion.drive(6 * mu, 1 * mu);
    control.waitMicros(300000);
    motion.drive(8 * mu, 7 * mu);
    control.waitMicros(1290000);
    //motion.stop();
}

function forward50(strength: number) {
    motion.drive((90 * mu), (91 * mu));
    for (let k = 0; k < strength; k++) {
        control.waitMicros(100000);
        //motion.drive((7 * mu), (8 * mu));
        motion.drive((9 * mu), (9 * mu));
        control.waitMicros(290000);
        motion.drive((7 * mu), (8 * mu));
        control.waitMicros(800000);
        motion.drive((9 * mu), (9 * mu));
        control.waitMicros(2000000);
        //motion.stop();
    }
}



function right() {
    //motion.turnRight(5)
    //motion.drive(2, 0);
    //control.waitMicros(2050000);
    motion.drive(turnMu, -1 * turnMu);
    control.waitMicros(260000);
    //motion.stop();
    
}


function left() {
    //motion.turnLeft(5)
    //motion.stop();
    motion.drive(-1 * turnMu, turnMu);
    control.waitMicros(270000);
    //motion.stop();
}


function reverse() {

}

commands.forEach((command) => {
    if (command == 'START') {
        forward25(1);
    } else {
        let cmd = command.split("");
        let strength = parseInt(cmd[0]);
        let direction = cmd[1];
    
        if (previousDirection == 'N') {
            if (direction == "N") {
                forward50(strength);
                
            }
            else if (direction == "E") {
                right();
                forward50(strength);
            }
            else if (direction == "S") {
                right();
                right();
                forward50(strength)
            }
            else if (direction == "W") {
                left()
                forward50(strength)
            }
        }

        if (previousDirection == 'E') {
            if (direction == "N") {
                left()
                forward50(strength)
            }
            else if (direction == "E") {
                forward50(strength)
            }
            else if (direction == "S") {
                right()
                forward50(strength)
            }
            else if (direction == "W") {
                right()
                right()
                forward50(strength)
            }
        }

        if (previousDirection == 'S') {
            if (direction == "N") {
                right()
                right()
                forward50(strength)
            }
            else if (direction == "E") {
                left()
                forward50(strength)
            }
            else if (direction == "S") {
                forward50(strength)
            }
            else if (direction == "W") {
                right()
                forward50(strength)
            }
        }

        if (previousDirection == 'W') {
            if (direction == "N") {
                right()
                forward50(strength)
            }
            else if (direction == "E") {
                right()
                right()
                forward50(strength)
            }
            else if (direction == "S") {
                left()
                forward50(strength)
            }
            else if (direction == "W") {
                forward50(strength)
            }
        }

        previousDirection = direction;
    }
    motion.stop();
})
