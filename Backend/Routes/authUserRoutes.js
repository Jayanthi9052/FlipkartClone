import express from 'express'

import { authUser } from '../Controller/authUserController.js'

const authRouter=express.Router()
authRouter.post('/authUser',authUser)
export default authRouter