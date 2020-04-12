const fs=require('fs');
const event=require("events").EventEmitter;
let emitter=new event();

module.exports=emitter;

var login=require('./login');
var account=require('./account');

emitter.emit("login");
emitter.emit("account");


// build in event
//  fs.ReadStream('src/data.txt').on("open",()=>{
//      console.log("file is open");
//  });

 

// custom event

// emitter.on("registration",( x)=>{
//     console.log("registration under process on");
//     x.handled=false;
// });
// emitter.on("registration",(y)=>{
//     if(y.handled){
//         console.log("registration already done");
//     }
// });

emitter.on("registration",()=>{
    console.log("registration under process");
})

// emitter.once("registration",()=>{
//     console.log("registration under process");
// })


emitter.emit("registration");

//emitter.emit("registration",{handled:false});


// emitter.on("copyfromtut",()=>{
//     console.log("copied fron blog ");
// })
// function eventHandler(){
//     console.log(`handled`);
    
//     // unsubscribe
//     emitter.removeListener("copyfromtut",eventHandler);
// }
// emitter.on('copyfromtut',eventHandler);

// emitter.emit("copyfromtut")


//emitter.emit('error',new Error("Custom Error Message"));







//console.log("app running");