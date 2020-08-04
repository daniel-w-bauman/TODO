import React from 'react'

class Todos extends React.Component {

  render(){
    if(this.props.todos.length === 0){
      return (<p>You have no TODOs!</p>)
    } else {
      return (
        <ul>
          {this.props.todos.map(todo => {
            return (<li onClick={() => this.props.deleteTodo(todo.id)}>{todo.text}</li>)
          })}
        </ul>
      )
    }
  }
}

export default Todos
