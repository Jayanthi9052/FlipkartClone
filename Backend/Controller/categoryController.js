import { ProductsDB } from "../models/Product.model.js";
export const CategoryController=async(req,res)=>{
    try{
    const fetchProduts=await ProductsDB.find()
    if(!fetchProduts){
        return res.status(400).json({message:"data not found"})
    }
    return res.status(200).json({fetchProduts});   
    }catch(err){

        return res.status(404).json({message:"server error"});
    }

}