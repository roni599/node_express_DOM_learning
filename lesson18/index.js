require('dotenv').config();
const express=require('express');
const app=express();
const PORT=process.env.PORT|3000;
const hostName=`127.0.0.1`;


app.get('/',(req,res)=>{
    res.send(`<h1>I am a get request from home route</h1>`);
});
app.listen(PORT,hostName,()=>{
    console.log(`Server running is http://${hostName}:${PORT}`);
});