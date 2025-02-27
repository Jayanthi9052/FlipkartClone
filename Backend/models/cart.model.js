import mongoose from "mongoose";
const CartModel=mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"User",
        required:true
    },
    cartItems:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"ProductsDB"

            },
            quantity:{
                type:String,
                default:1
            }
        }
    ]
   
    // title:{
    //     type:String,
    // },
    // image:{
    //     type:String,

    // },
    // quantity:{
    //     type:String,

    // },
    // price:{
    //     type:String,
    // }

})
export const Cart=mongoose.model("Cart",CartModel);