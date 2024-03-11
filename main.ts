let commands = ["1N", "2E", "100W"];


function forward(strength : number) {
    motion.drive(100, 100)
}

function right() {
    motion.drive(100, 100)
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
            forward(strength)
        }
        else if(direction == "E")
        {
            right()
            forward(strength)
        }
        else if(direction == "S")
        {
            right()
            right()
            forward(strength)
        }
        else if(direction == "W")
        {
            left()
            forward(strength)
        }
    }

    if (previousDirection == 'E') {
        if (direction == "N") {
            left()
            forward(strength)
        }
        else if (direction == "E") {
            forward(strength)
        }
        else if (direction == "S") {
            right()
            forward(strength)
        }
        else if (direction == "W") {
            right()
            right()
            forward(strength)
        }
    }

    if (previousDirection == 'S') {
        if (direction == "N") {
            right()
            right()
            forward(strength)
        }
        else if (direction == "E") {
            left()
            forward(strength)
        }
        else if (direction == "S") {
            forward(strength)
        }
        else if (direction == "W") {
            right()
            forward(strength)
        }
    }

    if (previousDirection == 'W') {
        if (direction == "N") {
            right()
            forward(strength)
        }
        else if (direction == "E") {
            right()
            right()
            forward(strength)
        }
        else if (direction == "S") {
            left()
            forward(strength)
        }
        else if (direction == "W") {
            forward(strength)
        }
    }
})
