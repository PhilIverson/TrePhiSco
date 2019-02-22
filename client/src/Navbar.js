import React from 'react'
import { Link } from "react-router-dom"
import {withSearchContext} from './SearchProvider'
import imc from './images/UofU.jpg'


function Navbar(props) {
    return (
        <nav className="app-wrapper">
        <h2 className="nav-title align-items-center font-size: 32px">TrePhisCo</h2>
        
        <img src={imc} className="nav-title" />   
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
                            <button className="logout"onClick={() => props.logout()}>Logout</button>
                        </div>
                    </React.Fragment>
            }
        </nav>

    )
}

export default withSearchContext(Navbar)


