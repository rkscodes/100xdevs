import { useState } from "react"



export function CreateTodo() {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	return (
		<div>
			<input type="text" placeholder="title" onChange={(e) => {
				const value = e.target.value
				setTitle(value)
			}} /> <br />
			<input type="text" placeholder="description" onChange={(e) => {
				const value = e.target.value
				setDescription(value)
			}} /> <br />
			<button onClick={() => {
				fetch("http://localhost:2323/todo", {
					method: 'POST',
					body: JSON.stringify({
						title: title,
						description: description
					}),
					headers: {
						"Content-type": 'application/json'
					}

				}).then(async (res) => {
					const value = await res.json()
					alert('Todo created')
				})
			}}>Add a todo</button>
		</div >
	)
}