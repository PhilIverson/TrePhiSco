import React, { Component } from 'react'
import { withSearchContext } from '../SearchProvider';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errorMessage: ""
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
            password: "",
            errorMessage: ""


        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push("/Search"))
            .catch(err => {
                this.setState({ errorMessage: err.response.data.message })
            })
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
                        placeholder="Username"
                    />
                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button type="submit">Submit</button>
                </form>
                <div className="motto">
                    <p>Providing you with the tool to make informed Health decisions for You and Yours</p>
                </div>
            </div>
        )
    }
}

export default withSearchContext(LoginForm)