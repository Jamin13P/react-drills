import React, {Component} from 'react';
import './App.css';
import Todo from "./Todo"

export default class App extends Component{

  constructor(){
    super()

    this.state = {
      text: "",
      todo: [],
    }
    
    this.handleTask = this.handleTask.bind(this)
  }

  handleText(val){
    this.setState({text: val})
  }

  handleAddTask(){
    this.setState({todo: [...this.state.todo, this.state.text], text: ""})
  }

  render(){
    let todo = this.state.todo.map((elem, index) => {
      return <Todo key={index} task={elem}/>
    })

    return(
      <div className="App">
        <h1>My To-Do List:</h1>
        <div>
          <input value={this.state.input} placeholder="Task" onChange={(e) => this.handleText(e.target.value)}/>
          <button onClick={this.handleTask}>Add</button>
        </div>
        {todo}
      </div>
    )
  }
}
