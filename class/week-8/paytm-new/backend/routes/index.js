import express from 'express'
import {userRouter} from './user.js'
import cors from 'cors'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.use(express.json())
router.use(cors())

router.get('/', (req, res)=>{
    res.send("hello there!!")
})

router.use('/user', userRouter)


export {router}