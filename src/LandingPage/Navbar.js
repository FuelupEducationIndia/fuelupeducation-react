import React from 'react'
import { Link } from 'react-router-dom';
import Sign_in from './Sign'
import App from './LandingPage'

function Navbar() {
    return (
        <div className="navbar">
            <ul className="navbar-list">
                <li><Link to="/" onClick={App}>Fuelup education</Link></li>
                <li>Courses&#9662;
                <ul className="dropdown-menu">
                        <li className="dropdown-child">Junior High School</li>
                        <li className="dropdown-child">Senior Hign School</li>
                        <li className="dropdown-child">Vacational School</li>
                        <li className="dropdown-child">College Students</li>
                        <li className="dropdown-child">Musical School</li>
                        <li className="dropdown-child">Engineering School</li>
                    </ul>
                </li>
                <li>Subjects&#9662;
                <ul className="dropdown-menu">
                        <li className="dropdown-child">Maths</li>
                        <li className="dropdown-child">History</li>
                        <li className="dropdown-child">English</li>
                        <li className="dropdown-child">Hindi</li>
                        <li className="dropdown-child">Regional language</li>
                        <li className="dropdown-child">Commerces</li>
                        <li className="dropdown-child">Science</li>
                        <li className="dropdown-child">Environment science</li>
                    </ul>
                </li>
                <li>For Kids</li>
                <li>Team</li>
                <li><Link to="/Sign_in" onClick={Sign_in}>Sign in</Link></li>
                <li>Start Learning</li>
            </ul>
        </div >
    )
}

export default Navbar
