import React, {Component} from 'react';
import './App.css';

export default class App extends Component {

  constructor(){
    super()

    this.state = {
      text: "",
      breakfast: ["pancakes", "eggs", "bacon", "toast", "drink"]
    }
  }

  handleChange(val){
    this.setState({text: val})
  }

  render(){
    let breakfastToDisplay = this.state.breakfast
      .filter((elem, index) => {
        return elem.includes(this.state.text)
      })
      .map((elem, index) => {
        return <h2 key={index}>{elem}</h2>
      })

      return(
        <div className="App">
          <input onChange={(e) => this.handleChange(e.target.value)}/>
          {breakfastToDisplay}
        </div>
      )
  }
}
