const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/students-api",{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true,useFindAndModify : false})
.then(()=>{
    console.log("Connection Successful");
})
.catch(err=>{
    console.log("Connection Error")
})

