import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
 
import {procedureContext} from './procedureProvider'
 
const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name']
 
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
 
  render () {
    const filteredProcedures = procedures.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
 
    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredProcedures.map(procedure => {
          return (
            <div className="mail" key={procedure.id}>
              <div className="from">{procedure.description}</div>
              <div className="subject">{procedure.price}</div>
            </div>
          )
        })}
      </div>
    )
  }
 
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}