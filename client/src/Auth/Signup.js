import React, { Component } from 'react'

export default class Signup extends Component {
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
        e.preventDefault();
        this.props.signup(this.state)
            .then(() => this.props.history.push("/users"))
    }
    
    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign up</h3>
                    <input
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="email"
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button type="submit">Create Account</button>
                </form>                
            </div>
        )
    }
}
