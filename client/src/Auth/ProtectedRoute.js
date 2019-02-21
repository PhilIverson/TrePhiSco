import React from "react"
import { Route, Redirect } from "react-router-dom";
import { withSearchContext } from "../SearchProvider"

function ProtectedRoute(props) {
    const { component: Component, ...rest } = props;
    return (
        props.token ?
            <Route {...rest} component={Component} /> :
            <Redirect to="/login" />
    )
}

export default withSearchContext(ProtectedRoute);