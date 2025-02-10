import express from 'express';
import { deleteAll } from '../Controller/deleteAllController.js';
const deleteRouter=express.Router()
deleteRouter.delete('/deleteAllCart',deleteAll);
export default deleteRouter;