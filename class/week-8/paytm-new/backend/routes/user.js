import express from 'express'
import zod from 'zod'
import {User} from '../db.js'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config.js'

const userRouter = express.Router()

userRouter.get('/', (req, res)=>{
    res.send('Hello User')
})

const  userSchema = zod.object({
    username: zod.string().min(1, {message : 'This filed is required'}).email("This is not valid email"),
    password : zod.string().min(4),
    firstName : zod.string(),
    lastName : zod.string()
}) 


userRouter.post('/signup', async (req,res)=>{
    const body = req.body;
    const {success, error} = userSchema.safeParse(body);

    if (!success){
        return res.json({
            message: error
        })
    }

    const user = User.findOne({
        username : body.username
    })

    if(user._id){
        return res.json({
            message: "Email already taken"
        })
    }

    try{
        const dbUser = await User.create(body)
        const token = jwt.sign({
            userID : dbUser._id
        }, JWT_SECRET)
        res.json({
            message: "User created successfully", 
            token : token 
        })

    }
    catch (e){
        res.status(300).send('User creation failed/ try again')
    }

})

export {userRouter} 