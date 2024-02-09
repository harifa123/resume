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

route.post("/signin",async(req,res)=>{
    let input=req.body
    let email=req.body.email
    let data=await studmodel.findOne({"email":email})

    if(!data)
    {
        return res.json({status:"incorrect email id"})
    }

    console.log(data)
    let dbPassword=data.password
    let inputPassword=req.body.password

    const match=await bcrypt.compare(inputPassword,dbPassword)

    if(!match)
    {
        return res.json({status:"incorrect password"})
    }

    res.json({status:"success"})

})


module.exports=route