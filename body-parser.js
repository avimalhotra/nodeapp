const express=require('express');
const path=require('path');
const app=express();
const bp=require('body-parser');
const ejs=require('ejs');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

//app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname,'public')))

//app.disable('etag');

app.get('/',(req,res)=>{
    res.status(200);
    res.setHeader('Content-Type','text/html');
    res.render('home',{});
    //res.send();
});

app.get('/get',(req,res)=>{
    res.status(200);
    res.setHeader('Content-Type','text/html');
    res.send(req.url)
});
app.get('/search',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    //res.status(200).send(req.query)
    res.status(200).json({search:req.query})
});
app.get('/product/:id/:name',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send(req.params);
});


app.get('/url',(req,res)=>{
    res.status(200);
    res.setHeader('Content-Type','text/html');
    res.status(404).send(req.url)
});

app.post('/post',(req,res)=>{
    console.log("post method")
    //res.send('post data');
    res.json(req.body);
});

/*wild card */
app.get('/**',(req,res)=>{
    res.status(400);
    res.setHeader('Content-Type','text/html');
    res.send("<h1>404 error</h1>")
});



app.listen(3000,()=>{
        console.log(`Server running at http://127.0.0.1:3000 `);
 });

