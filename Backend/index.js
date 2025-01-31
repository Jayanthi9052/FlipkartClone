import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const app=express()
app.use(express.json())
const PORT=process.env.PORT || 4000
const URL=process.env.MONGO_URL
mongoose
    .connect(URL)
    .then(()=>{
        console.log("connected to mongoDB")
    })
    .catch((err)=>{
        console.log("server issue didnot connected to the DB")
    })

app.listen(PORT,()=>{console.log(`connected to server:${PORT}`)})
