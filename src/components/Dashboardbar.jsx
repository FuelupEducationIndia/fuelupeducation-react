import React from "react";
import { NavLink } from "react-router-dom";
import mask from "../assets/images/maskGroup.png";

const Dashboardbar = () => {
  return (
    <div id="dashboard-bar">
      <div className="container">
        <div className="welcome-section">
          <h2>Welcome Sheela!</h2>
          <p>Check What's up with your Schedule...</p>
          <img src={mask} alt="" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to="browse" activeClassName="active" exact>
                Browse courses
                <span className="line"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="mycourses" activeClassName="active" exact>
                My courses
                <span className="line"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="lectures" activeClassName="active" exact>
                Lectures
                <span className="line"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="exams" activeClassName="active" exact>
                Exams
                <span className="line"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="assignements" activeClassName="active" exact>
                Assignements
                <span className="line"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="attendance" activeClassName="active" exact>
                Attendance
                <span className="line"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="certificats" activeClassName="active" exact>
                Certificats
                <span className="line"></span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboardbar;
