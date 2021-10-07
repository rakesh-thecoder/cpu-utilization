
const ncpu = require("os").cpus().length;
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
}, 1000);