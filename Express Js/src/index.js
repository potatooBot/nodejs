// var express = require('express');
// const fs=require('fs');
// var path = require('path');

//  const app = express();
// //  console.log(__dirname);
// // console.log(path.join(__dirname,"../public"))
// const static=path.join(__dirname,"../public")

// app.use(express.static(static));
// //  app.use(express.logger);
//  app.get('/',function(req, res){
//      res.send(`<h1>Hi this is from express yipeee</h1>`);
  
//     // res.end();

    
//  })


//  app.get("/about",(req, res)=>{
//     app.use("../public/contact.html",express.static(static));
//     // res.sendFile(static,'+contact.html'); 
//  })


//  const port =5500;




// app.listen(port,()=>{
// console.log(`Listening is ${port}`);
//  }); 
 

const express =require('express');
const path = require('path');
const app =express();
// console.log(path.join(__dirname,"../public"));
const staticPath=path.join(__dirname,"../public");
app.use("/",express.static(staticPath));
// app.get("/",(req, res)=>{
 
// })
const port =5500;
app.listen(port,()=>{
console.log("listening");
});

