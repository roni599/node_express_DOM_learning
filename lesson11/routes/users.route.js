const express=require('express');
const router=express.Router();

router.get('/login',(req,res)=>{
    res.send('<h1>I am a get request from login route</h1>');
    res.end();
});

router.get('/register',(req,res)=>{
    res.send('<h1>I am a get request from register route</h1>');
    res.end();
});

module.exports=router;