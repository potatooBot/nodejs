const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/register",{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})
.then(()=>{
    console.log("DATABASE CONNECTED")
})
.catch(()=>{
    console.log("ERROR");
})
