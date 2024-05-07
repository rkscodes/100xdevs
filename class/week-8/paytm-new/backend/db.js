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


export { User }