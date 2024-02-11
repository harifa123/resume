const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const studRoute=require("./controller/studRouter")
const postRoute=require("./controller/postRouter")
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://harifa123:harifa123@cluster0.j6vqcp5.mongodb.net/resumeDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.use("/api/stud",studRoute)
app.use("/api/postt",postRoute)


app.listen(3001,()=>{
    console.log("server running")
})
