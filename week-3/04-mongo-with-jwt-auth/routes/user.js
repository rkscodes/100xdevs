const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index')
const jwt = require('jsonwebtoken')
// User Routes
const JWT_SECRET = 'lksjd$@@#ADEF912as'


router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username
    })
    if (user.length != 0) {
        res.status(401).send('Username already exists, try other username')
        return
    }
    await User.create({
        username,
        password
    })
    res.json({
        message: "User created successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })
    console.log(user)
    if (user.length != 0) {
        const token = jwt.sign({ username }, JWT_SECRET)

        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = res.locals.username;
    // const username = req.custom.username
    // console.log(username)
    console.log(courseId)

    try {
        await User.updateOne({ username }, {
            "$push": {
                purchasedCourses: courseId
            }
        })

        res.json({
            message: 'Purchase complete'
        })

    }
    catch (error) {
        res.status(400).send('Enter valid course id')
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: res.locals.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router