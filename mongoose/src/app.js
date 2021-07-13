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
const document = async ()=>{
try{


    const myFirst = new Playlist({
        name : "Keshav Kumar",
        type : "Human",
        age : 19,
    alive : true,
    })
const mySecond = new Playlist({
    name : "Aviral",
    type : "Human",
    age : 19,
alive : true,
})
const myFather = new Playlist({
    name : "Binod Kumar",
    type : "Human",
    age : 51,
alive : true,
})
const myMother = new Playlist({
    name : "Rajni Gupta",
    type : "Human",
    age : 44,
alive : true,
})
 const results= await Playlist.insertMany([myFirst, mySecond,myFather,myMother]);
 console.log(results);
}catch (e) {console.log(e);}
}





const app =express();
app.get('/',(req,res) => {
    res.send(`<b>working </b>`);
})
app.listen(port);

document();
