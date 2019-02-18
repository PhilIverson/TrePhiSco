import React, { Component, createContext } from 'react'
import axios from 'axios'
const { Consumer, Provider } = createContext()


// import {withSearchContext} from './Search'



export default class SearchProvider extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
            searchTerm: ""
        }
    }
    getResults(url) {
        // return axios.get(`/procedure?limit=50&keyword=${this.searchTerm}`)
        return axios.get(`/api/procedure?limit=50`)
            .then(response =>
                this.setState({
                    results: response.data,
                }))
                .catch(err => this.setState ({
                    errMsg: `You're Data Is Unavailable`
                }))
    }

    componentDidMount() {
        this.getResults('/api/procedure')
    }


    render() {
        const value = {
            ...this.state,
            getResults: this.getResults
        }
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

// export default withSearchContext(SearchProvider)

export const withSearchContext = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)