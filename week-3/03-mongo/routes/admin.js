const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const z = require('zod')
const { Admin, Course } = require('../db/index')
// import { z } from zod;
// import { Admin } from "../db/index";


userSchema = z.object({
    username: z.string(),
    password: z.string().min(4, { error: 'Min length 4 required' })
})

courseScheam = z.object({
    title: z.string(),
    description: z.string(),
    price: z.coerce.number(),
    imageLink: z.string()
})

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    try {
        userSchema.parse({ username, password })
        const user = new Admin({ username, password })
        user.save().then(() => console.log('user saved'))
        res.status(200).send('admin created')
    }
    catch (error) {
        res.status(401).send(error)
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    console.log(title, description, price, imageLink)
    try {
        courseScheam.parse({ title, description, price, imageLink })
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