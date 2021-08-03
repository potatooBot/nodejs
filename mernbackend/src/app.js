const express =require('express');
const hbs = require('hbs');
const app = express();
require("./db/conn");
const path = require('path');
const port = process.env.PORT || 5500;

const templatePath= path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");
app.set('view engine', 'hbs');
app.set("views",templatePath);
hbs.registerPartials(partial_path);

app.get('/',(req, res)=>{
   res.render('index');
})
app.get('/login',(req, res)=>{
   res.render('login');
})
app.listen(port,()=>{
    console.log("listening");
});