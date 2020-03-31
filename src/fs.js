const fs=require('fs');

//var data=fs.readFileSync('src/data.txt');               // blocking method

//console.log(data);          // buffer
//console.log(data.toString());          // string

fs.readFile('src/data.txt',(err,data)=>{                        // non blocking request 
    if(err){
        console.error(`Error : ${err}`)
    }
    else{
        console.log(data.toString())
    }
});

/* fs.writeFile('src/file2.txt','hello file 2','utf8',(err)=>{
    if(err){
        console.error('error')
    }
}) */

fs.appendFile('src/file2.txt','\nAppend data',(err)=>{
    if(err){
        console.error("Error: ", err)
    }
});

//fs.unlinkSync('src/delete.txt');

fs.unlink('src/delete.txt',(err)=>{
    if(err){
        console.error("Error: ",err)
    }
    else{
        console.log("file deleted")
    }
})


//console.log("server running");