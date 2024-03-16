export function Todo({ todos }) {
	return (
		<div>
			{todos.map((todo) => {
				return (
					<div>
						<h2>{todo.title}</h2>
						<h3>{todo.description}</h3>
						<h4>{todo.completed == true ? 'Completed' : 'Mark as done'}</h4>
					</div>)
			})}
		</div>
	)
}