const express =require('express');
const app = express();
require('./db/conn');
const Employee = require('./models/employee');
const routerPath = require('./Routers/routers');
const port =  process.env.PORT || 5500;
app.use(express.json());
app.use(routerPath);








// app.post('/employee',(req, res) =>{
// console.log(req.body);
// const employee =new Employee(req.body);
// employee.save().then(() =>{
//     res.status(201).send(employee)
// }).catch(err =>{
//     res.status(400).send(err);
// })
    
// })


// Async AWait


app.listen(port,()=>{
    console.log("Listening");
})