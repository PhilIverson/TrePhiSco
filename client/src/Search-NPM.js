import React, {Component, createContext} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import { createContext } from 'vm';

const {Consumer, Provider} = createContext()
 
import {withSearchContext} from './SearchProvider'

 
const KEYS_TO_FILTERS = ['procedure.id', 'procedure.description', 'procedure.price']
 
export class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
 
  render () {
    const filteredProcedures = results.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    const value = {
        ...this.state
    }
    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredProcedures.map(procedure => {
          return (
            <Provider value={value}>
            {/* this.props.children? */}
            <div className="mail" key={procedure.id}>
              <div className="from">{procedure.description}</div>
              <div className="subject">{procedure.price}</div>
            </div>
            </Provider>
          )
        })}
      </div>
    )
  }
 
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}



export default withSearchContext(Search);

export const withSearchContext = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)