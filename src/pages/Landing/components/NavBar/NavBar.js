/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './NavBar.module.scss'

import arrowDown from '../../../../assets/images/arrow-down.png'
import Button from '../../../../components/UI/Button/Button'

const NavBar = ({ isAuth }) => {
  return (
    <nav className={styles.Navigation}>
      <div className={styles.logo}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
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
        {/* <li className={styles.NavItem}> */}
        <Link to="/for-kids" className={styles.NavItem}>
          For Kids
        </Link>
        {/* </li> */}
        <Link to="/team" className={styles.NavItem}>
          Team
        </Link>
        <Link to="/blog" className={styles.NavItem}>
          Blog
        </Link>
        <li className={styles.NavItem}>
          <Link to="/donate" className={styles.NavDonate}>
            Donate Now
          </Link>
        </li>
      </ul>
      <ul className={styles.NavigationSecond}>
        <li className={styles.NavSecondItem}>Sign in</li>
        <Button
          typeBtn="button"
          className="ButtonStartLearning"
          text="Start Learning"
        />
      </ul>
    </nav>
  )
}

NavBar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}

export default NavBar
