import { Cart } from "../models/cart.model.js";
export const fetchCartData=async(req,res)=>{
    try{
        const cartData=await Cart.find()
        if(!cartData){
            return res.status(400).json({message:"Cart is empty"});
        }
        return res.status(200).json({cartData})
    }catch(err){
        return res.status(404).json({message:"error fetching data",err});

    }
}