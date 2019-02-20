import React from 'react'
import Login from "./Auth/Login"
import { Route, Switch, Redirect } from "react-router-dom";

import SearchForm from "./SearchForm"
import SearchProvider from './SearchProvider';
import Navbar from './Navbar';
import { withSearchContext } from './SearchProvider';
import SavedList from './SavedList';
import ProcedureList from './ProcedureList';
import Signup from './Auth/Signup';

function App(props) {
  
  return (
    <div className="app-wrapper">
      <Navbar />
      
      {/* add routes here */}
      <Switch>
        <Route path="/Procedures" component={SavedList}/>
        <Route path="/Search" component={SearchForm}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>


      </Switch>
    </div>
  )
}

export default withSearchContext(App)
