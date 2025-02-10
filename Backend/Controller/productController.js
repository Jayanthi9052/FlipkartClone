import { products } from "../data.js";
import { ProductsDB } from "../models/Product.model.js";
export const productController=async(req,res)=>{
    try{
        await ProductsDB.insertMany(products);
        res.status(200).json({data:products})
    }catch(err){
        console.log(err);
    }
}