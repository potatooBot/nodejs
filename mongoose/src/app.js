const mongoose = require('mongoose');
const express = require('express');
const port = 5500;
mongoose.connect("mongodb://localhost:27017/keshavTesting", { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})


    .then(() => {
        console.log("connection successful")
    })
    .catch((err) => {
        console.log("connection error")
    });
const playlistSchema = new mongoose.Schema({
    name: { type: String, required: true,uppercase: true,unique: true , trim : true},
    type: { type : String, required: true,enum :["Human"]},
    age: { 
        type : Number,
        validate(value){
            if(value<0 || value ==0){
                throw new Error("Negative Number Cannot Be Defined :(");
            }
        }
    },
    alive: { type: Boolean},
    Date: {
        type: Date,
        default: Date.now(),
    }
})
const Playlist = new mongoose.model("Playlist", playlistSchema);
const document = async ()=>{
try{


//     const myFirst = new Playlist({
//         name : "Keshav Kumar",
//         type : "Human",
//         age : 19,
//     alive : true,
//     })
// const mySecond = new Playlist({
//     name : "Aviral",
//     type : "Human",
//     age : 19,
// alive : true,
// })
// const myFather = new Playlist({
//     name : "Binod Kumar",
//     type : "Human",
//     age : 51,
// alive : true,
// })
// const myMother = new Playlist({
//     name : "Rajni Gupta",
//     type : "Human",
//     age : 44,
// alive : true,
// })
//  const results= await Playlist.insertMany([myFirst, mySecond,myFather,myMother]);
//  console.log(results);
// }catch (e) {console.log(e);}
// try{
// const myGrandfather =new Playlist({
    
//         name : "Raghunath Prasad",
//         age : 80,
//         type : "Human",
//         alive : false,
    
//     })
// const myTurtle =new Playlist({
    
//         name : "Raghunath Prasad",
//         age : 1,
//         type : "Animal",
//         alive : false,
    
//     })

const myTesting =new Playlist({
    name : "Testing Name",
    age : 20,
    type :"Human",
    alive : true,
})


    const result = await Playlist.insertMany([myTesting]) ;
    console.log(result);
}
    catch(err) {console.log(err);}
    

}
document();
const getDocument = async () => {
    try {  

        // For Getting Only Name not Id
        // let result = await Playlist.find({ type: "Human" }).select({ name: 1,_id: 0 });

        // For Using greater than
        // let result =await Playlist.find({ age :{$gte :50}}).select({name :1});

        // For Using less than 
        // let result =await Playlist.find({ age :{$lte :50}}).select({name :1});


        // For something that includes in database
        // let result = await Playlist.find({type : {$in:["Human"]},alive :{$in :[false]}});

        // For logical operators
        // let result = await Playlist.find({ $or :[ {type :"Human"}, {alive : false }]}).select({name :1});



        // For Counting Number pf Documnets
        // let result = await Playlist.find({ $or :[ {type :"Human"}, {alive : false }]}).select({name :1}).countDocuments();



        // For Sorting in Ascending Order(A to Z)
        // let result = await Playlist.find({ $or :[ {type :"Human"}, {alive : false }]}).select({name :1}).sort({name :1});


        // For sorting in descending order(Z to A)
        // let result = await Playlist.find({ $or :[ {type :"Human"}, {alive : false }]}).select({name :1}).sort({name : -1});
        // let result = await Playlist.find({ $and :[ {type :"Human"}, {alive : false }]});
        // let result = await Playlist.find({ $nor :[ {type :"Human"}, {alive : false }]});
      
        console.log(result);
        if(result == 0 ){
            console.log("No result");
        }
    }catch (err) {
        console.log(err);
    }
}



//DElete Document

const deleteDocument =async (_id)=>{
    // const result = await Playlist.deleteOne({_id});
    const result = await Playlist.findByIdAndDelete({_id});
    console.log(result);
}



// deleteDocument("60f197476f3f764c0821146f");





let name = "Keshav";
const app = express();
app.get('/', (req, res) => {
    res.send(`${name}`);
})
app.listen(port);

// getDocument();

