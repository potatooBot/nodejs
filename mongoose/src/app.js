const mongoose =require('mongoose');
const express = require('express');
const port =5500;
mongoose.connect("mongodb://localhost:27017/keshavTesting",{useNewUrlParser:true,useUnifiedTopology: true })


.then(() =>{
    console.log("connection successful")
})
.catch((err)=>{
    console.log("connection error")
});
const playlistSchema = new mongoose.Schema({
    name :{ type: String, required : true},
    type :String,
    age : Number,
    alive : Boolean,
    Date : { 
        type : Date,
        default :Date.now(),
    }
})
const Playlist = new mongoose.model("Playlist", playlistSchema);
const data = new Playlist({
    name : "Dadi",
    type : "Human",
    age : 60,
alive : true,
})
data.save();
const app =express();
app.get('/',(req,res) => {
    res.send(`<b>working </b>`);
})
app.listen(port);
