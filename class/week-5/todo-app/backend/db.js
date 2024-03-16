const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:bIa4arnjECZ5l2m7@testcluster.lwbsnby.mongodb.net/?retryWrites=true&w=majority&appName=testCluster")

const todoSchema = mongoose.Schema({
	title: String,
	description: String,
	completed: Boolean
}
)

const todo = mongoose.model('todo', todoSchema)

module.exports = todo