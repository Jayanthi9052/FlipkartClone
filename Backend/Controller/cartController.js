import { Cart } from "../models/cart.model.js";

export const cartController=async(req,res)=>{
    try{
        const {id,title,image,price,quantity}=req.body;

        const productCheck= await Cart.findOne({product_id:id})
        if(!productCheck){
            const sendToCart=new Cart({
                product_id:id,
                title:title,
                image:image,
                price:price,
                quantity:parseInt(quantity,10)
            })
            await sendToCart.save()
            console.log(sendToCart);
            return res.status(200).json({sendToCart})
        }
        else{
            productCheck.quantity += parseInt(quantity, 10);
            await productCheck.save()
            console.log(productCheck)
            return res.status(200).json({productCheck})
        }
    }catch(err){
        return res.status(404).json({message:`error${err}`})

    }

}