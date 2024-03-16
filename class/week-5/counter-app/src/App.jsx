
// state, components

import { useState } from "react";

let state = {
  count: 0
}
function App() {
  const [todos, setTodos] = useState([{
    title: 'Go to gym',
    description: 'Go to gym at 7 pm',
    completed: true
  }, {
    title: 'Study DSA',
    description: 'Study DSA from 9 to 10',
    completed: false
  }])

  function addNewTodo() {
    setTodos([...todos, {
      title: 'New todo',
      description: 'Description of new todo'
    }])
  }
  return (
    <div>
      <button onClick={addNewTodo}>Add new todo</button>
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
