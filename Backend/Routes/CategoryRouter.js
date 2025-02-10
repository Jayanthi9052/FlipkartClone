import express from "express";
import { CategoryController } from "../Controller/categoryController.js";

const categoryRouter=express.Router()
categoryRouter.get('/products_data',CategoryController);
export default categoryRouter;