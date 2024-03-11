let commands = ["1N", "2E", "100W"];

let mu = 1;
function forward25(strength: number) {
    motion.drive(7.5 * mu, 1 * mu);
    control.waitMicros(300000);
    motion.drive(7, 7);
    control.waitMicros(1290000);
    motion.stop();
}

function forward50(strength:number) {
    motion.drive(8, 2);
    control.waitMicros(290000);
    motion.drive(8, 7);
    control.waitMicros(800000);
    motion.drive(9, 9);
    control.waitMicros(2000000);
    motion.stop();
}

function right(){

}


function left() {
    motion.drive(100, 100)
}

function reverse(){
    
}

commands.forEach((command) => {
    let cmd = command.split("");
    let strength = parseInt(cmd[0]);
    let direction = cmd[1];
    let previousDirection = "N"
    
    if( previousDirection == 'N')
    {
        if(direction == "N")
        {
            forward50(strength)
        }
        else if(direction == "E")
        {
            right()
            forward50(strength)
        }
        else if(direction == "S")
        {
            right()
            right()
            forward50(strength)
        }
        else if(direction == "W")
        {
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
})
