import React from 'react'
import Login from "./Auth/Login"
import { Route, Switch, Redirect } from "react-router-dom";

import SearchForm from "./SearchForm"
import Navbar from './Navbar';
import { withSearchContext } from './SearchProvider';
import SavedList from './SavedList';
import Signup from './Auth/Signup';
import ProtectedRoute from "./Auth/ProtectedRoute";

function App(props) {
  
  return (
    <div className="app-wrapper">
      <Navbar />
      <Switch>
        <ProtectedRoute path="/Procedures" component={SavedList}/>
        <ProtectedRoute path="/Search" component={SearchForm}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route exact path="/" render={() => <Redirect to="/Procedures"/>}/>


      </Switch>
    </div>
  )
}

export default withSearchContext(App)
