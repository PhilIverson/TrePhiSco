import React from 'react'
import { Link } from "react-router-dom"
import {withSearchContext} from './SearchProvider'

function Navbar(props) {
    return (

        <nav className="navbar-wrapper">
            {
                !props.token ?
                    <React.Fragment>
                        <div className="nav-link">
                            <Link to="/signup">Sign Up</Link>
                        </div>
                        <div className="nav-link">
                            <Link to="/login">Log In</Link>
                        </div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <div className="nav-link">
                            <Link to="/Procedures">Procedures</Link>
                        </div>
                        <div className="nav-link">
                            <Link to="/Search">Search</Link>
                        </div>
                        <div className="nav-link">
                            <button onClick={() => props.logout()}>Logout</button>
                        </div>
                    </React.Fragment>

            }
        </nav>

    )
}

export default withSearchContext(Navbar)
