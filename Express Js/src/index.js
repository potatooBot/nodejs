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

const express = require("express");
const path = require("path");
const app = express();
const hbs =require('hbs');


const staticPath = path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"./templates");
const partialsPath =path.join(__dirname,"./partials");
// const viewsPath=path.join(__dirname,"../views");
app.set("view engine", "hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);
// app.locals.title = 'My App'
// app.locals.email="kumarkeshav825@gmail.com";

// console.dir(app.locals.title);
// app.get("views");
// console.dir(app.locals.email);
// console.dir(app.locals.strftime);


// app.set("/",path.join("views",viewsPath));


app.use(express.static(staticPath));
app.get("", (req, res) => {
  res.render("index",{ 
     myName : "Keshav",
  });
});


app.get("/contact", (req, res) => {
  res.render("contact",{
    myName : "Amit",
  });
})

const port = 5500;
app.listen(port, () => {
  console.log("listening");
});
