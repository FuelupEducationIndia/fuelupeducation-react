import React from "react";
import logo from "../assets/images/logo.png";
import profil from "../assets/images/avatar/avatar.jpg";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Avatar } from "@material-ui/core";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-container">
          <div className="logo">
            <a href="">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="wrapper">
            <ul className="nav-links">
              <li>
                <a href="#">Dashbord</a>
              </li>
              <li>
                <a href="#">
                  Courses <KeyboardArrowDownIcon />
                </a>
              </li>
              <li>
                <a href="#">Schedule</a>
              </li>
              <li>
                <a href="#">Study groups</a>
              </li>
              <li>
                <a href="#">Tickets</a>
              </li>
              <li>
                <a href="#">
                  Profile <KeyboardArrowDownIcon />
                </a>
              </li>
            </ul>
            <ul className="profil">
              <li>
                <a href="#">
                  <AddAlertIcon fontSize="large" />{" "}
                  <span className="notif">2</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <SettingsOutlinedIcon fontSize="large" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Avatar small src={profil} /> <span className="status"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
