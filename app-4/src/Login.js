import React, {Component} from "react"

export default class Login extends Component{

    constructor(){
        super()

        this.state = {
            username: "",
            password: ""
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleUsername(val){
        this.setState({username: val})
    }

    handlePassword(val){
        this.setState({password: val})
    }

    handleLogin(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return(
            <div className="Login">
                <input className="inputLine" onChange={(e) => this.handleUsername(e.target.value)} placeholder="Username"/>
                <input className="inputLine" onChange={(e) => this.handlePassword(e.target.value)} placeholder="Password"/>
                <button className="confirmationButton" onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}