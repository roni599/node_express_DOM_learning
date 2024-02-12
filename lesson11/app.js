const express=require('express');
const app=express();
const PORT=3000;
const HostName='127.0.0.1';
const userRouter=require('./routers/users.route');

app.use("/api/users",userRouter);

app.get('/',(req,res)=>{
    res.send('<h1>I am a get request at home page</h1>');
});

app.use((req,res)=>{
    res.send('<h1>404!! Not a valid Url</h1>');
});

module.exports={
    app,
    PORT,
    HostName
}