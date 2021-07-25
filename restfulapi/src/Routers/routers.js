const express = require("express");
const router = new express.Router();
const Student =require('../models/students');


router.post('/students',async(req, res)=>{
    try{
        const user =new Student(req.body);
        const createUser= await user.save();
 res.status(201).send(createUser);
    }
    catch(err){
        res.status(400).send(err);
    }
})


router.get('/students',async(req, res)=>{
    try{

        const getStudents = await Student.find();
        res.send(getStudents);
    }
    catch(err){
res.send(err);
    }
})


router.get('/students/:id',async(req, res)=>{
    try{

        const _id =req.params.id;
        const findStudent = await Student.findById(_id);
        res.send(findStudent);
    }
    catch(err){
        res.send(err);
    }
    
})
router.get('/students/:name',async(req, res)=>{
    try{

        const _name =req.params.name;
        const findStudentName = await Student.findOne(_name);
        res.send(findStudentName);
    }
    catch(err){
        res.send(err);
    }
    
})
router.patch("/students/:id", async(req, res)=>{
    try {
        const _id = req.params.id;
        const user = await Student.findByIdAndUpdate(_id,req.body,{new :true});
        res.send(user);
       
    } catch (error) {
        res.status(404).send(error);
    }
})



router.delete("/students/:id",async(req, res)=>{
    try{

        const _id= req.params.id;
        const deleteUser= await Student.findByIdAndDelete(_id);
        if(!req.params.id){
            return res.status(400).send()
        }
        res.send(deleteUser);
    }catch(e){
        res.status(404).send(e);
    }
})


router.delete("/students/:name",async(req, res)=>{
    try{

        const name= req.params.name;
        const deleteUser= await Student.findOneAndDelete(name,()=>{console.log("Working")});
        if(!req.params.name){
            return res.status(400).send()
            console.log("Not Working");
        }



        res.status.send(deleteUser);
    }catch(e){
        res.status(404).send(e);
    }
})

module.exports = router;