import React from 'react'
import {Link} from "react-router-dom"

function Navbar(props) {
    return (
        <nav className="navbar-wrapper">
            <div className="nav-link">
                <Link to="/signup">Sign Up</Link>
            </div>
            <div className="nav-link">
                <Link to="/login">Log In</Link>
            </div>
            <div className="nav-link">
                <Link to="/Procedures">Procedures</Link>
            </div>
            <div className="nav-link">
                <Link to="/Search">Search</Link>
            </div>
            <div className="nav-link">
                <button onClick={() => props.logout()}>Logout</button>
            </div>

        </nav>
    )
}

export default Navbar
