const express=require('express');
const app=express();
const PORT=3000;
const hostName=`127.0.0.1`;

const myMiddleware=(req,res,next)=>{
    console.log(`i am middleware`);
    req.currentTime=new Date(Date.now());
    next();
}
app.use(myMiddleware);
app.get('/',(req,res)=>{
    console.log(`i am home ${req.currentTime}`);
    res.send(`I am a get request from home route`);
});
app.use((err,req,res,next)=>{
    res.status(500).send(`Something broken`);
})
app.get('/about',(req,res)=>{
    console.log(`i am about ${req.currentTime}`);
    res.send(`i am from abot`);
})
app.use((req,res,next)=>{
    res.send(`404 not a valid url`);
})
app.listen(PORT,hostName,()=>{
    console.log(`Server running is http://${hostName}:${PORT}`);
});