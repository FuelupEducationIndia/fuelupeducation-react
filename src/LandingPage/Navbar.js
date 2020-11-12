import React from 'react'
import { Link } from 'react-router-dom';
import Sign_in from './Sign'
import App from './LandingPage'

function Navbar() {
    return (
        <div className="navbar">
            <ul className="navbar-list">
                <li><Link to="/" onClick={App}>Fuelup education</Link></li>
                <li>Courses&#9662;</li>
                <li>Subjects&#9662;</li>
                <li>For Kids</li>
                <li>Team</li>
                <li><Link to="/Sign_in" onClick={Sign_in}>Sign in</Link></li>
                <li>Start Learning</li>
            </ul>
        </div >
    )
}

export default Navbar
