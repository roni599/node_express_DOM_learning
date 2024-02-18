const { check } = require("express-validator");

exports.userRegistrationValidator = [
    check('name')
        .trim()
        .notEmpty()
        .withMessage('Name is missing')
        .isLength({ min: 5 })
        .withMessage('name must have at least 5 characters'),
    check('email')
        .trim()
        .notEmpty()
        .withMessage("Email is missing")
        .isEmail()
        .withMessage("not a valid Email")
        .isLength({ min: 5 })
        .withMessage('email must have at least 5 characters'),
    check('password')
        .trim()
        .notEmpty()
        .withMessage("password is missing")
        .isLength({ min: 5 })
        .withMessage('password must have al least 5 characters'),
    check('dob')
        .trim()
        .notEmpty()
        .withMessage('DOB is missing')
        .isISO8601()
        .toDate()
        .withMessage('not a valid dob')
    ,
]
exports.userloginValidator = [
    check('email')
        .trim()
        .notEmpty()
        .withMessage("Email is missing")
        .isEmail()
        .withMessage('not a valid Email'),
    check('password')
        .trim()
        .notEmpty()
        .withMessage("password is missing")
    ,
]