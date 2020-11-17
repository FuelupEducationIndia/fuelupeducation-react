import React, { useRef, useState, useEffect } from "react";
import FuelupLogo from "../Assets/Images/logo.png";
import "../Styles/SASS/globalStyles.scss";
import msgIcon from "../Assets/Images/mask-group-67@3x.png";
import searchIcon from "../Assets/Images/mask-group-68@3x.png";
import notifIcon from "../Assets/Images/mask-group-66@3x.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileSettings from "./profileSettings";
import { clickedProfileAction } from "../Redux/Actions/actions";
import gsap from "gsap";

const links = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Courses", path: "/courses" },
  { name: "Schedule", path: "/schedule" },
  { name: "Study groups", path: "/studygroups" },
  { name: "Tickets", path: "/tickets" },
  { name: "Profile", path: "/profile" },
];

const NavBar = () => {
  const profRef = useRef();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profileIcon);
  const handleProfile = () => {
    if (profile) {
      dispatch(clickedProfileAction());
    } else {
      dispatch(clickedProfileAction());
    }
  };
  console.log(profRef);
  return (
    <>
      <ProfileSettings profile={profile} />
      <div className="navBarContainer">
        <div className="logo">
          <img src={FuelupLogo} alt="" />
        </div>
        <div className="navBtns">
          <div className="linkBtns">
            <ul>
              {links.map((link, index) => {
                return (
                  <NavLink
                    activeStyle={{ color: "orange" }}
                    key={index}
                    to={link.path}
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </ul>
          </div>
          <div className="iconBtns">
            <img src={searchIcon} alt="" />
            <img src={msgIcon} alt="" />
            <img src={notifIcon} alt="" />
            <div className="profileIcon" onClick={handleProfile}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
