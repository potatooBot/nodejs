var express = require('express');
const fs=require('fs');
var path = require('path');

 const app = express();
//  console.log(__dirname);
// console.log(path.join(__dirname,"../public"))
const static=path.join(__dirname,"../public")
app.use(express.static(static));

//  app.use(express.logger);
 app.get('/',function(req, res){
     res.send(`<h1>Hi this is from express yipeee</h1>`);
 })


 app.get("/about",(req, res)=>{
    res.sendFile(path.join(__dirname,'/public/contactt.html'));  
})


 const port =5500;




app.listen(port,()=>{
console.log(`Listening is ${port}`);
 }); 
 




