const express=require('express');
const app=express();
const userRouter=require('./routes/users.route');
const chalk=require('chalk');
const PORT=3000;
const hostName=`127.0.0.1`;

app.use("/api",userRouter);

app.get('/',(req,res)=>{
    res.status(200).send('i am okey');
})

app.listen(PORT,hostName,()=>{
    console.log(chalk.blue.bgRed.bold(`Server is runnig at http://${hostName}:${PORT}`));
})