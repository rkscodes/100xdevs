// const express = require("express");
import express from 'express'
import cors from 'cors'
import {router as rootRouter} from './routes/index.js';

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.use('/api/v1', rootRouter)

app.listen(PORT,()=>{
    console.log('Server started')
})