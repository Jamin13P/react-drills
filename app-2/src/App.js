import React, {Component} from 'react';
import './App.css';

export default class App extends Component{

  constructor(){
    super()

    this.state = {
      breakfast: ["pancakes", "eggs", "bacon", "toast", "drink"]
    }
  }

  render(){
    let breakfastToDisplay = this.state.breakfast.map((elem, index) => {
    return <h2 key={index}>{elem}</h2>
    })

  return <div className="App">{breakfastToDisplay}</div>
  }
}
