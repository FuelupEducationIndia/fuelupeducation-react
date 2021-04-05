/* eslint-disable import/no-unresolved */
import React from 'react'
import PropTypes from 'prop-types'

import arrowDown from '../../assets/images/arrow-down.png'
import logo from '../../assets/images/logo.png'
import bellIcon from '../../assets/images/bell.png'
import settingIcon from '../../assets/images/settings.png'

import profileIcon from '../../assets/images/avatar.png'
import buildClassName from '../../utils/buildClassName'
import styles from './NavBar.module.scss'

const NavBar = ({ isAuth }) => {
  return (
    <nav className={styles.Navigation}>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <ul className={styles.NavItems}>
        <li className={styles.NavItem}>Dashboard</li>
        <li className={styles.NavItem}>
          Courses
          <img src={arrowDown} alt="Courses" />
        </li>
        <li className={styles.NavItem}>Schedule</li>
        <li className={styles.NavItem}>Study Groups</li>
        <li className={styles.NavItem}>Ticket </li>
        <li className={styles.NavItem}>
          Profile
          <img src={arrowDown} alt="Profile" />
        </li>
        <li className={buildClassName(styles.NavItem, styles.NavItemRelative)}>
          <img src={bellIcon} alt="Bell" />
          <div className={styles.NavItemBadge}>2</div>
        </li>
        <li className={styles.NavItem}>
          <img src={settingIcon} alt="Setting" />
        </li>
        <li className={buildClassName(styles.NavItem, styles.NavItemRelative)}>
          <div>
            <img src={profileIcon} alt="Profile" />
            <div className={styles.NavItemActive} />
          </div>
        </li>
      </ul>
    </nav>
  )
}

NavBar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}

export default NavBar
