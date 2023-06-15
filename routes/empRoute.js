const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));

const employeesData=require('../model/empData');

//TODO: get data from db  using api '/api/employeelist'
router.get('/employeelist',async (req,res)=>{
    try {
        const data=await employeesData.find();
        res.send(data);
    } catch (error) {
        res.status(404).send('Data not found');
    }
})

//TODO: get single data from db  using api '/api/employeelist/:id'
router.get('/employeelist/:id',async (req,res)=>{
    try {
        const ind=req.params.id
        const data=await employeesData.findOne({_id:ind});
        res.send(data);
    } catch (error) {
        res.status(404).send('Data not found');
    }
})
//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
router.post('/employeelist', async (req,res)=>{
    try {
        const item=req.body;
        const newData=new employeesData(item);
        const savedData=await newData.save();
        res.status(200);
    } catch (error) {
        res.status(400).send('post not successful');
        console.log(error);
    }
})


//TODO: delete a employee data from db by using api '/api/employeelist/:id'
router.delete('/employeelist/:id', async (req,res)=>{
    try {
        const index=req.params.id;
        const updated =await employeesData.findByIdAndDelete(index);
        res.send(updated);
        res.status(200);
    } catch (error) {
        res.status(400).send('Delete not successful');
        console.log(error);
    }
})

//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
router.put('/employeelist',async (req,res)=>{
    try {
           let idx=req.body._id;
           console.log(idx);
           let updateData={$set:req.body};
           const updatedPut =await employeesData.findByIdAndUpdate(idx,updateData);
           res.send(updatedPut);
           res.status(200);
    } catch (error) {
            res.status(400).send('Update not successful');
            console.log(error);
    }
})

module.exports=router;