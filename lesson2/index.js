const fs=require('fs');

fs.writeFile('demo1.txt','i am ekRoni',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('Successfully');
    }
})

// fs.readFile('demo1.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data)
//     }
// })

// fs.appendFile('demo1.txt','. now i am in jashore',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('Successfully');
//     }
// })

// fs.rename('demo1.txt','demo2.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(`Successfully`);
//     }
// })

// fs.exists('demo2.txt',(result)=>{
//     if(result){
//         console.log('found');
//     }
//     else{
//         console.log('Not found');
//     }
// })

// fs.unlink('demo2.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('successfully');
//     }
// })