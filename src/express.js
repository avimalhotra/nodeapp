const express=require('express');
const app=express();
const path=require('path');

//express().use((req,res)=>{ console.log("server running"); res.end("2rd") }).listen(3000);

app.use(express.static(path.resolve(__dirname,'public')));

// app.use((req,res)=>{
//     res.status(200);
//     res.setHeader('Content-Type',"text/html");
//     res.write("<h1>");
//     res.write(req.url);
//     res.write("</h1>");

//     res.end();
// });

app.get('/',(req,res)=>{
    res.setHeader('Content-Type',"text/html");
    res.status(200).send('Home Page');
});
app.get('/avi',(req,res)=>{
    res.setHeader('Content-Type',"text/html");
    res.status(200).send(req.url);
});
app.get('/search',(req,res)=>{
    res.setHeader('Content-Type',"text/html");
    //res.status(200).send(req.query);
    res.status(200).json({search:req.query});
});
app.get('/phone/:name/:model',(req,res)=>{
    res.setHeader('Content-Type',"text/html");
    res.status(200).send(req.params);
})  

app.post('/post',(req,res)=>{
    res.setHeader('Content-Type',"text/html");
    //console.log(res.json({"data":req.query}));
    console.log("post data");
    res.end();
});


app.get('/**',(req,res)=>{
    res.setHeader('Content-Type',"text/html");
    res.status(404).send('Page Not Found');
});

app.listen(3000,()=>{
    console.log(`Server running at http://127.0.0.0:3000`);
})


