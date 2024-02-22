// Middleware for handling auth
JWT_SECRET = 'lksjd$@@#ADEF912as'
const jwt = require('jsonwebtoken')

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const auth = req.headers.authorization
    const token = auth.split(' ')[1]

    try {
        const decodedValue = jwt.verify(token, JWT_SECRET)
        if (decodedValue.username) {
            next()
        } else {
            res.status(403).json({
                msg: 'You are not authenticated'
            })
        }
    }
    catch (error) {
        res.json({
            msg: "Incorrect inputs"
        })
    }
}

module.exports = adminMiddleware;