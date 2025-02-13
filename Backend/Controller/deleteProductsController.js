import { ProductsDB } from "../models/Product.model.js"
export const deleteAllProducts=async(req,res)=>{
    try{
        const deleteData=await ProductsDB.find()
        console.log(deleteData)
        if(deleteData.length===0){
            return res.status(404).json({message:"data not found"})
        }
        await ProductsDB.deleteMany({});
        return res.status(200).json({message:"data deleted successfully"})
     }catch(err){
        return res.status(500).json({message:`srever error ,${err}`})
        console.log(err)
     }
}