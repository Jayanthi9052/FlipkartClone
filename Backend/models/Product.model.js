import mongoose  from "mongoose";

const ProductSchema=new mongoose.Schema({
    category:{
        type:String,
        require:true
    },
    sub_category:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    rating:{
        rate:{
            type:String,
            required:true
        },
        count:{
            type:String,
            required:true
        }
    },
    image:{
        type:String,
        required:true
    }
    
})
export const ProductsDB=mongoose.model("ProductsDB",ProductSchema)