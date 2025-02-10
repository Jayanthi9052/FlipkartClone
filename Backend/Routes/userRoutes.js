import express from 'express'
import { UserControl } from '../Controller/userController.js'
const userRouter=express.Router()
userRouter.post('/addUser',UserControl)
export default userRouter;