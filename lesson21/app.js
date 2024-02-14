const express=require('express');
const app=express();
const userRouter=require('./routes/users.route');
const PORT=3000;
const hostName=`127.0.0.1`;

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);

module.exports={
    app,
    PORT,
    hostName
}