const express=require("express")
const studmodel=require("../model/studModel")
const route=express.Router()
const bcrypt=require("bcryptjs")
hashpasswordgenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

route.post("/signup",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    const hashedpassword=await hashpasswordgenerator(password)
    data.password=hashedpassword
    let stud=new studmodel(data)
    let result=stud.save()
    res.json({status:"success"})
})


module.exports=route