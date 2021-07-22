const express=require('express');
const app =express();
require("./db/conn");
const Student =require("./models/students");


app.use(express.json());

const port = process.env.PORT || 3000;


app.get('/',(req, res)=>{
    res.send(`<h1>Hey Buddy Wttap  by keshav</b>`);
})


//Create a new Student

app.post("/students",(req,res) => {
console.log(req.body);
const user = new Student(req.body);
user.save().then(() => {
    res.status(201).send(user);
}).catch(err =>{
    res.status(400).send(err);
})
})




app.listen(port,()=>{
    console.log(`Listening at ${port}`);
})