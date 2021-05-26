import React, { useState } from 'react';
import '../../assets/styling/studentSide.scss'

const Header = () => {
  let image = require('../../assets/images/logo.png');

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  }
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <div 
              className="menu"
              onClick={toggleMenu}
              >
              <i className="fas fa-bars"></i>
            </div>
            {/* For Mobile and Tablet Screen */}
            {menu ? 
              <div className="nav-items">
                <div className="nav-profile-icons">
                  <i className="fas fa-bell"></i>
                  <i className="fas fa-cog"></i>
                  <i className="fas fa-user-circle"></i>
                </div>
                <ul>
                  <li>Dashboard</li>
                  <li>Courses<i className="fas fa-chevron-right"></i>
                    <ul>
                      <li>Home</li>
                      <li>Courses</li>
                      <li>Services</li>
                      <li>Contact</li>
                      <li>About</li>
                    </ul>
                  </li>
                  <li>Schedule</li>
                  <li>Study Groups</li>
                  <li>Tickets</li>
                  <li>Profile<i className="fas fa-chevron-right"></i>
                    <ul>
                      <li>Home</li>
                      <li>Courses</li>
                      <li>Services</li>
                    </ul>
                  </li>
                </ul>
              </div>
            : ''
            }
            <div className="image">
              <img src={image.default} alt="" height="50px" width="50px" />
            </div>
            <div className="text">
              <h3>Fuelup<br />Education</h3>
              <p>Spreading Education</p>
            </div>
          </div>
          <div className="nav-links">
            <ul>
              <li>Dashboard</li>
              <li>Courses<i className="fas fa-chevron-down"></i>
                <ul>
                  <li>Home</li>
                  <li>Courses</li>
                  <li>Services</li>
                  <li>Contact</li>
                  <li>About</li>
                </ul>
              </li>
              <li>Schedule</li>
              <li>Study Groups</li>
              <li>Tickets</li>
              <li>Profile<i className="fas fa-chevron-down"></i>
                <ul>
                  <li>Home</li>
                  <li>Courses</li>
                  <li>Services</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="profile-setting">
            <div className="icons">
              <i className="fas fa-bell"></i>
              <i className="fas fa-cog"></i>
              <i className="fas fa-user-circle"></i>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
