const express = require('express')
const { createTodo, updateTodo } = require('./types')
const todo = require('./db')
const cors = require('cors')
// import { createTodo, updateTodo } from './types'
// import { todo } from './db'
const app = express()
app.use(cors())
app.use(express.json())
const PORT = 2323

app.post('/todo', async (req, res) => {
	const createPayload = req.body
	const parsedPayload = createTodo.safeParse(createPayload)
	if (!parsedPayload.success) {
		res.status(411).json({
			msg: 'You sent the wrong inputs'
		})
	}
	//put it in mongodb
	await todo.create({
		title: createPayload.title,
		description: createPayload.description,
		completed: false
	})
	res.json({
		msg: 'Todo created'
	})
})

app.get('/todos', async (req, res) => {
	const todos = await todo.find({})
	res.json({
		todos: todos
	})
})

app.put('/completed', async (req, res) => {
	const updatePayload = req.body
	console.log('Input is ', updatePayload.id)
	const parsedPayload = updateTodo.safeParse(updatePayload)
	if (!parsedPayload.success) {
		res.status(411).json({
			msg: 'You sent the wrong inputs'
		})
		return
	}
	await todo.updateOne({
		_id: req.body.id
	}, {
		completed: true
	})

	res.json({
		msg: 'Todo updated'
	})
})

app.listen(PORT)