const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const viewsPath = path.join(__dirname, '../views/');

router.get('/register', (req, res) => {
    // res.status(200).json({
    //     message:"i am ekRoni i am from dahaka",
    //     statusCode:200
    // })
    // res.redirect('/api/user/login');
    const indexPath = path.join(viewsPath, 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send('<h1>File not found</h1>');
    }

});

router.get('/login', (req, res) => {
    res.send('<h1>i am from login page</h1>');
    res.end();
});
module.exports = router;