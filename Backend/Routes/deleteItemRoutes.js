import express from "express";
import { deleteItem } from "../Controller/deleteItemController.js";

const deleteItemRouter=express.Router()
deleteItemRouter.delete('/deleteItem',deleteItem)

export default deleteItemRouter;