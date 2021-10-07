
const ncpu = require("os").cpus().length;
const Gpio = require('onoff').Gpio;

const red = new Gpio(4, 'out'); 
const green = new Gpio(4, 'out'); 

let previousTime = new Date().getTime();
let previousUsage = process.cpuUsage();
let lastUsage;

setInterval(() => {
    const currentUsage = process.cpuUsage(previousUsage);

    previousUsage = process.cpuUsage();

    const currentTime = new Date().getTime();

    const timeDelta = (currentTime - previousTime) * 10 * ncpu;
    const { user, system } = currentUsage;

    usage = (system + user) / timeDelta;
    previousTime = currentTime;

    console.log(usage);

    if(usage > 0.4){
    	red.writeSync(1);
    	green.writeSync(0);
    }
    else{
    	red.writeSync(0);
    	green.writeSync(1);
    }
}, 1000);
