const express=require('express');
const router=express.Router();
const path=require('path');
const fs=require('fs');

const fileLocation=path.join(__dirname,'../views/');
const errorFileName=path.join(fileLocation,'404.html');
router.get('/contact',(req,res)=>{
    const fileName=path.join(fileLocation,'contact.html');
    if(fs.existsSync(fileName)){
        res.sendFile(fileName);
        // res.status(200).json({
        //     message:'i am ekRoni',
        //     statusCode:200
        // })
        res.statusCode=200;
        res.cookie('name','ekRoni');
        res.cookie('age','25');
        res.clearCookie('name','ekRoni');
        res.clearCookie('age','25');
        res.append('id','41200101460');
    }
    else{
        res.status(404).sendFile(errorFileName);
    }
    // res.redirect('/api/users/about');
})
router.get('/about',(req,res)=>{
    const fileName=path.join(fileLocation,'about.html');
    if(fs.existsSync(fileName)){
        res.sendFile(fileName);
    }
    else{
        res.status(404).sendFile(errorFileName);
    }
})

module.exports=router;