/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList = [];
  }

  add(todo) {
    this.todoList.push(todo);
  }

  remove(indexOf) {
    if (indexOf >= 0 && indexOf < this.todoList.length) {
      this.todoList.splice(indexOf, 1);
    }
  }

  update(indexOf, todo) {
    if (indexOf >= 0 && indexOf < this.todoList.length) {
      this.todoList[indexOf] = todo;
    }
  }

  getAll() {
    return this.todoList;
  }

  get(indexOf) {
    if (indexOf >= 0 && indexOf < this.todoList.length) {
      return this.todoList[indexOf];
    }
    return null;
  }

  clear() {
    while (this.todoList.length > 0) {
      this.todoList.pop();
    }
  }
}




module.exports = Todo;
