let commands = ["1N", "2E", "100W"];


function forward() {
    motion.drive(100, 100)
}

function reverse(){
    
}

commands.forEach((command) => {
    let cmd = command.split("");
    let strength = cmd[0];
    let direction = cmd[1];
    forward();
})
