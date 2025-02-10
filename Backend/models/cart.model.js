import mongoose from "mongoose";
const CartModel=mongoose.Schema({
   
    title:{
        type:String,
    },
    image:{
        type:String,

    },
    quantity:{
        type:String,

    },
    price:{
        type:String,
    }

})
export const Cart=mongoose.model("Cart",CartModel);