import React, { Component } from 'react'

export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDevault();
        this.props.login(this.state)
            .then(() => this.props.history.push("/users"))
    }

    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <h3>Log In</h3>
                    <input
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text"
                        placeholder="username"
                    />
                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="password"
                    />
                    <button type="submit">Sign Up</button>
                </form>
                <div className="motto">
                    <p>Providing you with the tool to make informed Health decisions for You and Yours</p>
                </div>
            </div>
        )
    }
}
