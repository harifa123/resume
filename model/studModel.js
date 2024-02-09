const mongoose=require("mongoose")
const resumeschema=mongoose.Schema(
    {
        name:
        {type:String,
        required:true},
        email:{type:String,
            required:true},
        password:String
    }
)
module.exports=mongoose.model("resume",resumeschema)