import React from 'react';
import './Header.scss'
const Header = () => {
    return (
        <div className = "header-main">
            <div className = "mid-section">
                <div style ={{display:'flex'}}>
                <h3>Fuelup <br/> Education</h3>
                <ul className = "menu-options">
                    <li className = "options">Courses</li>
                    <li className = "options">Subjects</li>
                    <li className = "options">For Kids</li>
                    <li className = "options">Team</li>
                    <li className = "options">Blog</li>
                    <button className = "donate-now-btn">Donate Now</button>
                </ul>
                </div>
                <div className = "login-div">
                    <p className = "login-text">Login</p>
                    <button className = "start-learning-btn">Start Learning</button>
                </div>
            </div>
            <div className = "bottom-section">
                <h1 className = "banner-heading">Explore the newest <br/> educational blogs / news</h1>
                <p className = "banner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
        </div>
    );
};

export default Header;