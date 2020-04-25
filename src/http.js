const http=require('http');
const ip="127.0.0.1";
const port=8080;
const fs=require('fs');
const path=require('path');

var server=http.createServer((req,res)=>{
    //res.statusCode=200;
    //res.write(req.method);
    //res.write(req.url);
    //res.write(req.httpVersion);
    //res.write(req.connection.localAddress);
    //res.write(JSON.stringify(req.headers));
    if( req.url=="/" && req.method=="GET"){
        //res.statusCode=200;
        //res.setHeader('Content-Type','text/html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("ROOT");
        res.end();
    }
    if( req.url=="/avi" && req.method=="GET"){
        res.statusCode=404;
        res.write("Hello HTTP");
        res.end();
    }
    if( req.url=="/html" && req.method=="GET"){
        fs.readFile(path.resolve('src/home.html'),(err,data)=>{
            if(err){
                console.error("ERROR FOUND");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                //console.log(data.toString());
                res.write(data);
                res.end();
            }
        });
    }


    
});
server.listen(port,ip,()=>{
    console.log(`server running at http://${ip}:${port}`);
});





