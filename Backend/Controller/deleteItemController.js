import { Cart } from "../models/cart.model.js";

export const deleteItem =async(req,res)=>{
    try{
        const {id}=req.body;
        const deleteProduct =await Cart.findOne({_id:id})
        console.log(deleteProduct)
        if(!deleteProduct){
            return res.status(404).json({message:"data not found"})
        }
        await deleteProduct.deleteOne()
        return res.status(200).json({message:"item deleted siccessfully"})


    }catch(err){
        return res.status(500).json({message:"server error"});
    }
}