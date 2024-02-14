const express=require('express');
const app=express();
const PORT=3000;
const hostName='127.0.0.1';

app.get("/products/:id([0-9]{3})",(req,res)=>{
    const id=req.params.id;
    res.send(`<h1>The pararam value is : ${id}</h1>`);
})
app.get('/products/:title([A-Za-z]+)',(req,res)=>{
    const title=req.params.title;
    res.send(`<h1>The params Title is : ${title}</h1>`);
})
app.use('*',(req,res)=>{
    res.status(404).send(`<h1>404!! Error page loading</h1>`);
});
app.listen(PORT,hostName,()=>{
    console.log(`Server is running at http://${hostName}:${PORT}`);
})