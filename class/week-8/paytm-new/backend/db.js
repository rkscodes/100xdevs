// const mongoose = require('mongoose')
import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://ram:UYdG8iRrhzKD71gB@cluster0.l7kjezl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String
})
const User = mongoose.model('User', userSchema)

const accounts = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    balance: {
        type: Number,
        require: true
    }

})

const Account = mongoose.model('Account', accounts)

export { User, Account }