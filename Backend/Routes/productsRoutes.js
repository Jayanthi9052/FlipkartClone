import { productController } from "../Controller/productController.js";
import express from "express";

const productRouter=express.Router()
productRouter.post("/products",productController)
export default productRouter