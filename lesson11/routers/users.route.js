const express=require('express');
const router=express.Router();

router.get('/login',(req,res)=>{
    res.send('<h1>i am a get request at Login page</h1>');
    res.end();
});

router.get('/register',(req,res)=>{
    res.send('<h1>I am a get request at Register page</h1>');
});

module.exports=router;