const express=require('express');
const app=express();
const morgan=require('morgan');
const PORT=3000;
const hostName=`127.0.0.1`;

app.use(morgan('dev'));

app.get('/home',(req,res)=>{
    res.status(200).send("i am from home route");
})
app.listen(PORT,hostName,()=>{
    console.log(`Server is runnig at http://${hostName}:${PORT}`);
})