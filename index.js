var os 	= require('os-utils');


os.cpuUsage(function(value){
	console.log(value.toFixed(1));
});
