import { Cart } from "../models/cart.model.js";

export const deleteAll=async(req,res)=>{
    try{
        const deleteData=await Cart.find()
        console.log(deleteData)
        if(deleteData.length===0){
            return res.status(404).json({message:"data not found"})
        }
        await Cart.deleteMany({});
        return res.status(200).json({message:"data deleted successfully"})
     }catch(err){
        return res.status(500).json({message:"srever error"})
     }
}