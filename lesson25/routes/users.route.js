const express = require('express');
const { userRegister, userLogin } = require('../controllers/users.controller');
const { runValidation } = require('../validations/users.validation');
const { userRegistrationValidator, userloginValidator } = require('../validations/users.auth');

const userRouter = express.Router();

userRouter.use(express.urlencoded({ extended: true }));
userRouter.use(express.json());

userRouter.post('/register',userRegistrationValidator,runValidation,userRegister)

userRouter.post('/login',userloginValidator,runValidation, userLogin)

module.exports = userRouter;