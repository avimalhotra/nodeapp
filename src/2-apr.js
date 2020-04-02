const colors=require('colors');
const shortid=require('shortid');
var network = require('network');
const netlist=require('network-list');

// console.log("Hello".red);
// console.log("Hello".green);
// console.log("Hello".blue);

var students=["avi","isra","ravi","ankita","ashish"];

//console.log(`Shortid for  is ${shortid()}`)

// students.forEach((i)=>{
//     console.log(`Id for used ${i} is ${shortid()}`);
// });


 
network.get_public_ip((err, ip)=>{
  //console.log(err || ip); // should return your public IP address
  //console.log(ip)
});

network.get_active_interface((err,data)=>{
    //console.log(data);
});

netlist.scan({}, (err, arr) => {
    //console.log(arr); // array with all devices
    arr.forEach((i)=>{
        console.log(i)
    })
});
