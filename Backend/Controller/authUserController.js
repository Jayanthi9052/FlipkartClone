import { User } from "../models/users.model.js";
import bcrypt from 'bcrypt'
export const authUser=async(req,res)=>{

    try{
    const {email,password}=req.body
    const fetchUser=await User.findOne({email})
    console.log(fetchUser)
    if(!fetchUser){
        return res.status(404).json({message:"user doesnot exist"})
    }
    const isMatch=await bcrypt.compare(password,fetchUser.password)
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid password" });
    }

    return res.status(200).json({message:"login successfull"})
    
    }catch(err){
        console.error(err);
        return res.status(500).json({ message: "Server error" });

    }

    
}