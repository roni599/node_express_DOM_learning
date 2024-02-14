const path = require('path');
const users=require('../models/users.model');

exports.getUsers = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/index.html'));
};

exports.postUsers=(req,res)=>{
    const fname=req.body.fname;
    const age=req.body.age;

    const user={
        fname,
        age
    }
    users.push(user);
    res.status(201).json({
        status:true,
        users
    })
}