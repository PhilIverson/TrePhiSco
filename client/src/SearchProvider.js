import React, { Component, createContext } from 'react'
import axios from 'axios'
const { Consumer, Provider } = createContext()



export default class SearchProvider extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
            searchTerm: ""
        }
    }

    updateSearchTerm = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm
            
        }, this.getResults)
    }
    getResults(url) {
        return axios.get(`/api/procedure?limit=50&keyword=${this.state.searchTerm}`)

            .then(response =>
                this.setState({
                    results: response.data,
                }))
            .catch(err => this.setState({
                errMsg: `You're Data Is Unavailable`
            }))
    }

    componentDidMount() {
        this.getResults('/api/procedure')
    }


    render() {
        const value = {
            ...this.state,
            getResults: this.getResults,
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange,
            updateSearch: this.updateSearchTerm
        }
        return (
            <Provider value={value}>
                
                {this.props.children}
            </Provider>
        )
    }
}

export const withSearchContext = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)