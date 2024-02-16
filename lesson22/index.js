const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 3000;
const hostName = `127.0.0.1`;

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Welcome to home page</h1>')
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        const fileName = Date.now()+"_"+file.originalname; 
        cb(null, fileName);
    }
})

const upload = multer({ storage: storage })
app.get('/register',(req,res)=>{
    res.status(200).sendFile(__dirname+"/views/index.html")
})
app.post('/register',upload.single('image'), (req, res) => {
    res.status(201).send('<h1 style="text-align: center; margin-top: 50px;">File uploads successfully</h1>')
});

app.listen(PORT, hostName, () => {
    console.log(`Server is runnig at http://${hostName}:${PORT}`);
})