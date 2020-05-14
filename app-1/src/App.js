import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
 
  constructor(){
    super()

    this.state = {
      text: ""
    }
  }

  handleChange(val){
    this.setState({text: val})
  }
  
  render(){
    return(
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)}/>
        <p>{this.state.text}</p>
      </div>
    )
  }
}
