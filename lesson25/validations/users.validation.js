const { validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let errorsList=errors.array().map((error)=>{
            return error.msg
        })
        return res.status(400).json({ errors: errorsList });
    }
    next();
}