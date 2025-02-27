import { searchProducts } from "../Controller/searchProductsController.js";
import express from "express";

const searchProductRouter=express.Router()
searchProductRouter.get("/searchProduct",searchProducts)
export default searchProductRouter