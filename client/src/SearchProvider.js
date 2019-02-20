import React, { Component, createContext } from 'react'
import axios from 'axios'
const { Consumer, Provider } = createContext()

export default class SearchProvider extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
            searchTerm: "",
            savedProcedures: [],
            gotProcedures: []
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
    saveProcedure = (procedure) => {
        return axios.post('/api/compare/', { procedure })
            .then(response => {
                if (response.status === 204) return;
                this.setState(ps => ({
                    savedProcedures: [...ps.savedProcedures, response.data]
                }))
            })
            .catch(err => console.log(err));
    }

    getComparisons() {
        return axios.get(`/api/compare/`)
            .then(response =>
                this.setState({
                    savedProcedures: response.data,
                }))
            .catch(err => this.setState({
                errMsg: `You're Data Is Unavailable`
            }))
    }

    delSaved = (id) => {
       return axios.delete(`/api/compare/${id}`)
            .then(response => {
                this.setState(prevState => {
                    const updatedSave = prevState.savedProcedures.filter(x => {
                        return x.compareId !== id
                    })
                    return { savedProcedures: updatedSave }
                })
                return response;
            })
    }



    componentDidMount() {
        this.getComparisons();
    }


    render() {
        const value = {
            ...this.state,
            getResults: this.getResults,
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange,
            updateSearch: this.updateSearchTerm,
            saveProcedure: this.saveProcedure,
            delSaved: this.delSaved
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