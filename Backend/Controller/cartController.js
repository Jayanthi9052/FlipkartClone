import { Cart } from "../models/cart.model.js";

export const cartController=async(req,res)=>{
    try{
        const {title,image,price,quantity}=req.body;
        const sendToCart=new Cart({
            title:title,
            image:image,
            price:price,
            quantity:quantity
        })
        await sendToCart.save()
        console.log(sendToCart);
        return res.status(200).json({sendToCart})
    }catch(err){
        return res.status(404).json({message:`error${err}`})

    }

}