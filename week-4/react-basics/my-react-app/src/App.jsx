import { useState } from 'react'
import './App.css'

function App() {

  let globalId = 1;
  let todoState = [];
  let oldTodoState = [];

  function addTodoToDom(todo) {
    const div = document.getElementById('todos')

    let frag = document.createDocumentFragment(),
      temp = document.createElement('div')
    temp.innerHTML = `
    <div id=${todo.id}>
    <h2> ${todo.title}</h2>
    <p> ${todo.description} </p>
    </div>
    `
    while (temp.firstChild) {
      frag.appendChild(temp.firstChild)
    }
    div.appendChild(frag)
  }

  function removeTodoFromDom(todo) {
    const element = document.getElementById(todo.id);
    element.parentElement.removeChild(element);
  }

  function updateTodoInDom(todo) {
    const element = document.getElementById(newTodo.id);
    element.replaceChildren()
    let temp = document.createElement('')
    temp.innerHTML = `
    <div id=${todo.id}>
    <h2> ${todo.title}</h2>
    <p> ${todo.description} </p>
    </div>
    `
    while (temp.firstChild) {
      element.appendChild(temp.firstChild)
    }

  }

  function updateState(newTodos) {
    // calculate the diff b/w newTodos and oldTodos.
    // More specifically, find out what todos are - 
    // 1. added
    // 2. deleted
    // 3. updated
    const added = newTodos.filter(newTodo => !oldTodoState.some(oldTodo => oldTodo.id == newTodo.id));
    const deleted = oldTodoState.filter(oldTodo => !newTodos.some(newTodo => newTodo.id == oldTodo.id))
    const updated = newTodos.filter(newTodo => oldTodoState.some(oldTodo => oldTodo.id == newTodo.id))

    console.log("newtodostate", newTodos)
    console.log("oldtodostate", oldTodoState)
    console.log("added", added)
    console.log("deleted", deleted)
    console.log("updated", updated)
    // calculate these 3 arrays

    added.forEach(newTodo => addTodoToDom(newTodo))
    deleted.forEach(deletedTodo => removeTodoFromDom(deletedTodo))
    updated.forEach(updatedTodo => updateTodoInDom(updatedTodo))

    // call addTodo, removeTodo, updateTodo functions on each of the
    // elements
    oldTodoState = [...newTodos];
  }

  function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    todoState.push({
      title: title,
      description: description,
      id: globalId++,
    })
    updateState(todoState);
  }

  return (
    <div>
      <input type="text" id="title" placeholder="Todo title"></input> <br /><br />
      <input type="text" id="description" placeholder="Todo description"></input> <br /><br />
      <button onClick={addTodo}>Add todo</button>
      <br /> <br />

      <div id="todos">

      </div>
    </div>
  )
}



export default App
