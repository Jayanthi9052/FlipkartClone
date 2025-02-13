import express from "express";
import { deleteAllProducts } from "../Controller/deleteProductsController.js";

const deleteProductRouter = express.Router();

deleteProductRouter.delete('/deleteAllProducts', deleteAllProducts);

export default deleteProductRouter;
