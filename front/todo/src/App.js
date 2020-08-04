import './App.css';

import React from 'react'
import Todos from './components/todos.js'
import AddTodo from './components/addTodo.js'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { id: 0, todos: [] }
  }

  addTodo = (content) => {
    let newId = this.state.id
    const newTodo = {id: newId, text: content}
    let newTodos = []
    this.state.todos.forEach((todo) => {
      newTodos.push(todo)
    });
    newTodos.push(newTodo)
    newId = newId + 1
    this.setState({id: newId, todos: newTodos})
  }

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({todos: newTodos})
  }

  render(){
    return (
      <div className="App">
        <h1>TODO</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
