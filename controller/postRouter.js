const express=require("express")
const postmodel=require("../model/postModel")
const route=express.Router()

route.post("/add",async(req,res)=>
{
    let data=req.body
    let post=new postmodel(data)
    let result=post.save()

    res.json({status:"success"})
})

route.get("/viewall",async(req,res)=>{
    let data=await postmodel.find()
    .populate("userid","name address phone experience postgraduation graduation plustwo tenth certifications extracaricular -_id ")
    .exec()
    res.json(data)
})

module.exports=route
