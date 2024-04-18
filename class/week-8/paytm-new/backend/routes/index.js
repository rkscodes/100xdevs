import express from 'express'
import {userRouter} from './user.js'

const router = express.Router()

router.get('/', (req, res)=>{
    res.send("hello there!!")
})

router.use('/user', userRouter)


export {router}