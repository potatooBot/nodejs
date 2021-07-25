const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/restful-api",{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true,useFindAndModify :false})
.then(() =>{
    console.log("Data Base Connected")
})
.catch(err =>{
    console.log("Error");
})