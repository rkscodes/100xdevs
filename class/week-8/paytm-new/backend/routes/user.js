import express from 'express'
import zod from 'zod'
import { Account, User } from '../db.js'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config.js'
import { authMiddleWare } from '../middleware.js'

const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    res.send('Hello User')
})

const userSchema = zod.object({
    username: zod.string().min(1, { message: 'This filed is required' }).email("This is not valid email"),
    password: zod.string().min(4),
    firstName: zod.string(),
    lastName: zod.string()
})

const updateUser = zod.object({
    password: zod.string().min(4, { message: 'This field should be atleast 4 letters' }).optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})

userRouter.post('/signup', async (req, res) => {
    const body = req.body;
    const { success, error } = userSchema.safeParse(body);

    if (!success) {
        return res.json({
            message: error
        })
    }

    const user = await User.findOne({
        username: body.username
    })

    if (user && user._id) {
        return res.json({
            message: "Email already taken"
        })
    }

    try {
        const dbUser = await User.create(body)
        await Account.create({
            userId: dbUser._id,
            balance: Math.round((Math.random() * 10000 + 1) * 100) / 100
        })
        const token = jwt.sign({
            userID: dbUser._id
        }, JWT_SECRET)
        res.json({
            message: "User created successfully",
            token: token
        })

    }
    catch (e) {
        res.status(300).send('User creation failed/ try again')
    }

})

userRouter.put('/', authMiddleWare, async (req, res) => {
    const { success, error } = updateUser.safeParse(req.body);

    if (error) {
        res.status(411).json({
            message: error
        })
    }

    await User.updateOne({ _id: req.userID }, req.body)
    res.json({
        message: 'Updated successfully'
    })
})

userRouter.get('/bulk', authMiddleWare, async (req, res) => {
    const filter = req.query.filter || '';

    const users = await User.find({
        "$or": [
            {
                firstName: {
                    "$regex": filter
                }
            },
            {
                lastName: {
                    "$regex": filter
                }
            }
        ]
    })
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

export { userRouter }
