// Middleware for handling auth
const { Admin } = require('../db/index')

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username
    const password = req.headers.password

    Admin.findOne({ username }).then(admin => {
        if (!admin) {
            res.status(401).send('Invalid credentails')
            return;
        }
        if (password === admin.password) {
            // res.status(200).send('Authentication successful');
            return next();
        } else {
            res.status(401).send('Invalid credentials');
        }
    })
}

module.exports = adminMiddleware;