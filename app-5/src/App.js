import React, {Component} from 'react';
import './App.css';
import Image from "./Image"

export default class App extends Component{

  render(){
    return(
      <div className="App">
        <Image url={"https://i.pinimg.com/originals/e0/7a/dc/e07adce387b56b0a20f032b7a9ca1584.png"}/>
      </div>
    )
  }
}