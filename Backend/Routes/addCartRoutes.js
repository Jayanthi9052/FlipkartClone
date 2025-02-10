import express from "express";
import { cartController } from "../Controller/cartController.js";
const addCartRouter=express.Router()
addCartRouter.post('/addToCart',cartController)
export default addCartRouter