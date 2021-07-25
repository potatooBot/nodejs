const express =require('express');
const router =new express.Router();
const Employee = require('../models/employee');



router.post("/employee",async(req, res)=>{
    try{
    const user= new Employee(req.body);
    const createUser= await user.save();

console.log(createUser);
    res.status(201).send(createUser);
    
}
catch(err){res.status(400).send(err);}
})


router.get('/employee',async(req, res)=>{
    try{ 
    const user = req.body
    const getData = await Employee.find(user);
    res.send(getData);
    }catch(err){res.status(404).send(err)}
})
router.get('/employee/:name',async(req, res)=>{
    try{ 

    const getData = await Employee.findOne({name:req.params.name});
    res.send(getData);
    }catch(err){res.status(404).send(err)}
})
router.get('/employee/:id',async(req, res)=>{
    try{

        const _id=req.params.id;
        const user = await Employee.findById(_id);
        res.send(user);
    }catch(err){res.status.send(err)}

})

router.patch("/employee/:id",async(req,res)=>{
    try{

 
    const _id=req.params.id;
    const updateEmployee = await Employee.findByIdAndUpdate(_id,req.body,{new :true});
    res.send(updateEmployee);
}catch(err){res.status(404).send(err);}
})


router.delete("/employee/:id",async(req, res)=>{
    try {

        const _id=req.params.id;
        const deleteEmployee =await Employee.findByIdAndDelete(_id);
        if(!req.params.id){return res.status(404).send();}
        else{
            res.send(deleteEmployee);
        }
    }catch(e){res.status(500).send(e)}
    })


    router.delete("/employee/:name",async(req,res)=>{
        try{

            
            const StudentData=await Employee.deleteOne({name:req.params.name})
            res.send(StudentData)
        
        }catch(e){res.status(500).send(e)}
    })

module.exports = router;