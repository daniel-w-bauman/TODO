import React from 'react'

class AddTodo extends React.Component {
  constructor(props){
    super(props)
    this.state = {text: ''}
  }

  setText = (e) => {
    this.setState({text: e.target.value})
  }

  createTodo = (e) => {
    e.preventDefault()
    if(this.state.text === '') {
      alert('New TODO must have text')
    } else {
      this.props.addTodo(this.state.text)
      this.setState({text: ''})
    }
  }

  render(){
    return (
      <form onSubmit={(e) => this.createTodo(e)}>
        <input placeholder="New todo..." type='text' value={this.state.text} onChange={(e) => this.setText(e)} />
      </form>
    )
  }

}

export default AddTodo
