//console.log("Hello node");;

const os=require('os');

//console.log(os.arch());

/*os.cpus().forEach((i)=>{
    console.log(i);
});*/
//console.log(os.cpus());


//console.log(os.totalmem()/(1024*1024));            // in mbs
//console.log(os.totalmem()/(1024*1024*1024));            // in gbs


//console.log(os.freemem()/(1024*1024*1024));            // in mbs

//console.log(os.networkInterfaces())

//console.log(os.platform())
//console.log(os.type())

//console.log(os.uptime()/(60*60));

console.log(os.userInfo());