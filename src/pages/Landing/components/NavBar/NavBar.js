import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './NavBar.module.scss'

import arrowDown from '../../../../assets/images/arrow-down.png'

const NavBar = ({ isAuth }) => {
  return (
    <nav className={styles.Navigation}>
      <div className={styles.logo}>
        <Link to="/">
          <strong>Fuelup </strong>
          Education
        </Link>
      </div>
      <ul className={styles.NavItems}>
        <li className={styles.NavItem}>
          Courses
          <img src={arrowDown} alt="Courses" />
        </li>
        <li className={styles.NavItem}>
          Subjects
          <img src={arrowDown} alt="Subjects" />
        </li>
        <li className={styles.NavItem}>
          <Link to="/for-kids">For kids</Link>
        </li>
        <li className={styles.NavItem}>
          <Link to="/Team">Team</Link>
        </li>
        <li className={styles.NavItem}>
          <Link to="/donate">Donate Now!</Link>
        </li>
      </ul>
      <ul className={styles.NavigationSecond}>
        <li className={styles.NavSecondItem}>Sign in</li>
        <li className={styles.NavSecondItem}>Start Learning</li>
      </ul>
    </nav>
  )
}

NavBar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}

export default NavBar
