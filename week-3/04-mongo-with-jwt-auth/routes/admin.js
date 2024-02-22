const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db/index");
const router = Router();
const jwt = require("jsonwebtoken");

const JWT_SECRET = 'lksjd$@@#ADEF912as'

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    console.log(username)
    // check if a user with this username already exists
    const user = await Admin.find({
        username
    })
    if (user) {
        res.status(401).send('Username already exists, try other username')
        return
    }
    console.log('Above admin create')
    Admin.create({
        username,
        password
    })
    console.log('I am belwo admin create')

    res.json({
        message: 'Admin created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await Admin.find({
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

router.post('/courses', adminMiddleware, (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    try {
        // courseScheam.parse({ title, description, price, imageLink })
        const course = new Course({ title, description, price, imageLink })
        course.save().then(() => { console.log('course saved') })
        res.status(200).send('Course Inserted')
    } catch (error) {
        res.status(401).send('Please enter valid course structure')
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
    res.json({
        courses: response
    })
});

module.exports = router;