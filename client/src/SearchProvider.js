import React, { Component, createContext } from 'react'
import axios from 'axios'
const { Consumer, Provider } = createContext()
const protectedAxios = axios.create();

protectedAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

// const AppContext = React.createContext();

export default class SearchProvider extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
            searchTerm: "",
            savedProcedures: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || "",
            gotProcedures: []
        }
    }

    updateSearchTerm = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm
        }, this.getResults)
    }
    getResults(url) {
        return protectedAxios.get(`/api/procedure?limit=50&keyword=${this.state.searchTerm}`)
            .then(response =>
                this.setState({
                    results: response.data,
                }))
            .catch(err => this.setState({
                errMsg: `You're Data Is Unavailable`
            }))
    }
    saveProcedure = (procedure) => {
        return protectedAxios.post('/api/compare/', { procedure })
            .then(response => {
                if (response.status === 204) return;
                this.setState(ps => ({
                    savedProcedures: [...ps.savedProcedures, response.data]
                }))
            })
            .catch(err => console.log(err));
    }

    getComparisons() {
        return protectedAxios.get(`/api/compare/`)
            .then(response =>
                this.setState({
                    savedProcedures: response.data,
                }))
            .catch(err => this.setState({
                errMsg: `You're Data Is Unavailable`
            }))
    }

    delSaved = (id) => {
       return protectedAxios.delete(`/api/compare/${id}`)
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

    signup = (userInfo) => {
        return protectedAxios.post("/auth/signup", userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    user,
                    token
                });
                return response;
            })
    }

    login = (credentials) => {
        return axios.post("/auth/login", credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user,
                    token
                });
                this.getComparisons();
                return response;
            })
    }

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            results: [],
            searchTerm: "",
            savedProcedures: [],
            user: {},
            token: ""
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
            delSaved: this.delSaved,
            signup: this.signup,
            login: this.login,
            logout: this.logout
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