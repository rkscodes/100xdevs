const mongoose = require('mongoose');
const { string } = require('prop-types');
mongoose.connect('mongodb://127.0.0.1:27017/paytm');

const userSchema = new mongoose.Schema({
	userName: String,
	password: String,
	firstName: String,
	lastName: String
})

const User = mongoose.model("User", userSchema)

module.exports = {
	User
}