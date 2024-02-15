const express=require('express');
const { getUsers,postUsers, getHome } = require('../controllers/users.controller');
const router=express.Router();


router.get('/users',getUsers);
router.post('/users',postUsers)

module.exports=router;
