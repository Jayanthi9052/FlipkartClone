import mongoose from "mongoose";

const usersSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
})
export const User=mongoose.model("User",usersSchema)