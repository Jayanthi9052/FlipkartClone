import mongoose from "mongoose";
const CartModel=mongoose.Schema({

    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true,
    //     unique: true // Ensure one cart per user
    // },
    // cartItems: [
    //     {
    //         productId: {
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: "ProductsDB",
    //             required: true
    //         },
    //         quantity: {
    //             type: Number, // Change to Number for calculations
    //             default: 1
    //         }
    //     }
    // ]
    product_id:{
        type:String
    },
    title:{
        type:String,
    },
    image:{
        type:String,

    },
    quantity:{
        type:Number,

    },
    price:{
        type:String,
    }

})
export const Cart=mongoose.model("Cart",CartModel);