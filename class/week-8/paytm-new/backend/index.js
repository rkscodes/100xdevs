// const express = require("express");
import express from 'express'

import {router as rootRouter} from './routes/index.js';

const app = express()
const PORT = 3000

app.use('/api/v1', rootRouter)

app.listen(PORT,()=>{
    console.log('Server started')
})