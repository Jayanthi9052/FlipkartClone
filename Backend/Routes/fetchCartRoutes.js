import express from "express";
import { fetchCartData } from "../Controller/fetchCartController.js";
const fetchCartRoute=express.Router()
fetchCartRoute.get('/fetchCartData',fetchCartData)
export default fetchCartRoute