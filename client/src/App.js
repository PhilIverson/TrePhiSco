import React from 'react'
import Login from "./Auth/Login"
import SearchForm from "./SearchForm"
import SearchProvider from './SearchProvider';
import { withSearchContext } from './SearchProvider';

function App(props) {
  return (
    <div className="app-wrapper">
      <SearchProvider>
        <SearchForm />
      </SearchProvider>
    </div>
  )
}

export default withSearchContext(App)
