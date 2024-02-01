const express=require('express');
const app=express();
const PORT=3000;
const HostName='127.0.0.1';
const userRouter=require('./routes/users.route');

app.use('/api/user',userRouter);

app.get('/',(req,res)=>{
    res.send('<h1>I am a get request from home route</h1>');
    res.end();
});

app.use((req,res)=>{
    res.send('<h1>404 !!! Not a valid Url</h1>');
    res.end();
});

module.exports={
    app,
    PORT,
    HostName
}