import React from 'react'
import styled from './Navbar.module.css'

function Main() {
    return (
        <div className={styled.mainComp} >
            <img src="./images/logo.png" id="imgs" />
            <ul>
                <li>My courses</li>
                <li>Lectures</li>
                <li>Exams</li>
                <li>Assignment</li>
                <li>Invitations</li>
                <li>Attendance</li>
            </ul>
        </div>
    )
}

export default Main
