import React from 'react'
import Carditem from './Carditem'
import './GlobalStyles.scss'


function Fuelup() {
    return (
        <div>
            <div className="navbar">
                <img src='/images/logo.png' className="logo" alt="logo" />
                <ul className="nav-menu">
                    <li className="nav-item">Dashboard</li>
                    <li className="nav-item">Courses</li>
                    <li className="nav-item">Schedule</li>
                    <li className="nav-item">Study groups</li>
                    <li className="nav-item">Tickets</li>
                    <li className="nav-item">Profile</li>
                </ul>
            </div>
            <div className="welcome">
                <h1 className="welcome-message">Welcome Sheela!</h1>
                <p className="welcome-message">Check what`s up with your Schedule...</p>
                <img src="/images/your-image.png" className="welcome-image" alt="your-img" />
            </div>
            <div className="sub-menu">
                <ul className="nav-menu">
                    <li className="sub-nav-item">Browse courses
                        <ul className="dropdown-menu">
                            <li className="dropdown-child">My courses</li>
                            <li className="dropdown-child">Lecture</li>
                            <li className="dropdown-child">Exams</li>
                            <li className="dropdown-child">Assignment</li>
                            <li className="dropdown-child">Invitation</li>
                            <li className="dropdown-child">Attendance</li>
                        </ul>
                    </li>
                    <li className="sub-nav-item">My courses</li>
                    <li className="sub-nav-item">Lectures</li>
                    <li className="sub-nav-item">Exams</li>
                    <li className="sub-nav-item">Assignments</li>
                    <li className="sub-nav-item">Invitations</li>
                </ul>
            </div>
            <div className="content">
                <div className="search">
                    <p className="text">Search:</p>
                    <input type="text" className="search-area" placeholder="Search Keyword" />
                    <p className="text">Class:</p>
                    <select className="select">
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                        <option value="option4">option4</option>
                    </select>
                    <p className="text">Subject:</p>
                    <select className="select">
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                        <option value="option4">option4</option>
                    </select>
                    <p className="text">Educational board:</p>
                    <select className="select">
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                        <option value="option4">option4</option>
                    </select>
                    <button className="search-button">Search</button>
                </div>
                <div className="container">
                    <div>
                        <Carditem
                            src="/images/your-image.png"
                            head="Your text here"
                            text="Your text here."
                        />
                        <Carditem
                            src="/images/your-image.png"
                            head="Your text here"
                            text="Your text here."
                        />
                        <Carditem
                            src="/images/your-image.png"
                            head="Your text here"
                            text="Your text here."
                        />
                    </div>

                    <div>
                        <Carditem
                            src="/images/your-image.png"
                            head="Your text here"
                            text="Your text here."
                        />
                        <Carditem
                            src="/images/your-image.png"
                            head="Your text here"
                            text="Your text here."
                        />
                        <Carditem
                            src="/images/your-image.png"
                            head="Your text here"
                            text="Your text here."
                        />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Fuelup


