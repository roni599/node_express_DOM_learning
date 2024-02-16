const express=require('express');
const app=express();
const chalk=require('chalk');
const PORT=3000;
const hostName=`127.0.0.1`;



app.get('/',(req,res)=>{
    res.status(200).send("i am from home route");
})
app.listen(PORT,hostName,()=>{
    console.log(chalk.bgRed.bold(`Server is runnig at http://${hostName}:${PORT}`));
})