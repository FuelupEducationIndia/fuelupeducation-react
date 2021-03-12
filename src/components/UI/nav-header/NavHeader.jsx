import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from 'assets/profilePageImages/logo.png'
import ChevronDown from 'assets/profilePageImages/chevron-down.png'
import NotificationBell from 'assets/profilePageImages/notification-bell.svg'
import ProfileImage from 'assets/profilePageImages/profile-image.png'
import SettingsIcon from 'assets/profilePageImages/settings-icon-light-grey.svg'

import styles from './NavHeader.module.scss'

const NavHeader = () => {
    return (
        <div className={styles.NavHeader}>
            <div className={styles.LogoDiv}>
                <img src={Logo} alt="fuelup education logo" />
            </div>
            <nav className={styles.NavDiv}>
                <ul>
                    <li><NavLink className={styles.NavLink} to="/">Dashboard</NavLink></li>
                    <li className={styles.LinkWithChevron}>
                        <NavLink className={styles.NavLink} to="/">Courses</NavLink>
                        <img className={styles.ChevronDownIcon} src={ChevronDown} alt="chevron down" />
                    </li>
                    <li><NavLink className={styles.NavLink} to="/">Schedule</NavLink></li>
                    <li><NavLink className={styles.NavLink} to="/">Study groups</NavLink></li>
                    <li><NavLink className={styles.NavLink} to="/">Tickets</NavLink></li>
                    <li className={styles.LinkWithChevron}>
                        <NavLink className={styles.NavLink} to="/">Profile</NavLink>
                        <img className={styles.ChevronDownIcon} src={ChevronDown} alt="chevron down" />
                    </li>
                </ul>
            </nav>
            <div className={styles.IconsDiv}>
                <img src={NotificationBell} alt="notifications" />
                <img src={SettingsIcon} alt="settings icon" />
                <img className={styles.ProfileImage} src={ProfileImage} alt="profile image" />
            </div>
        </div>
    )
}

export default NavHeader
