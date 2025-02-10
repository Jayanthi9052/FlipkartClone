import { User } from "../models/users.model.js";
import bcrypt from 'bcrypt'
export const UserControl=async(req,res)=>{
    try{
        const {username,mobile,email,password}=req.body;
        const checkUser=await User.findOne({email})
        if(!checkUser){
            const postUser=new User({
            username:username,
            mobile:mobile,
            email:email,
            password:await bcrypt.hash(password,10)
        });
            await postUser.save();
            return res.status(200).json({message: "User registered successfully", user: postUser});
        }
        return res.status(400).json({message:"user already exist"})
        
    }
    catch(err){
        return res.status(404).json({message:`error posting data${err}`})
        
    }
}