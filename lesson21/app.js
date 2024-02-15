const express=require('express');
const app=express();
const cors=require('cors');
const path=require('path');
const userRouter=require('./routes/users.route');
const PORT=3000;
const hostName=`127.0.0.1`;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/home.html'))
})

app.use('*',(req,res)=>{
 res.sendFile(path.join(__dirname+'/views/404.html'));
})

module.exports={
    app,
    PORT,
    hostName
}