import mongoose from "mongoose";

const userModal = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    }
})

export default mongoose.model("students",userModal)