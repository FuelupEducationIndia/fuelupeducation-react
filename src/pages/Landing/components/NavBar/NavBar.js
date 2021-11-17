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
import Logo from '../../../../components/UI/Header/assets/logo.png'
import { ArrowDownIcon } from '../../../../components/icons'
import bell from '../../../../components/UI/Header/assets/Icon material-add-alert.png'
import settings from '../../../../components/UI/Header/assets/Icon feather-settings.png'
import userPhoto from '../../../../components/UI/Header/assets/Ellipse 32.png'

const NavBar = ({ isAuth }) => {
  if (!isAuth) {
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
          <li className={styles.NavItem}>For Kids</li>
          <Link to="/team" className={styles.NavItem}>
            Team
          </Link>
          <li className={styles.NavItem}>Blog</li>
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
  return (
    <div className={styles.Header}>
      <img src={Logo} alt="Logo" className={styles.Header_LogoSvgIcon} />
      <div className={styles.Header_middleContainer}>
        <nav>Dashboard</nav>
        <nav>
          Courses
          <ArrowDownIcon className={styles.Header_arrow} />
        </nav>
        <nav>Schedule</nav>
        <nav>Study groups</nav>
        <nav>Tickets</nav>
        <nav>
          Profile
          <ArrowDownIcon className={styles.Header_arrow} />
        </nav>
      </div>
      <div className={styles.Header_iconsContainer}>
        <img src={bell} alt="bell" />
        <img src={settings} alt="settings" />
        <img src={userPhoto} alt="user" />
      </div>
    </div>
  )
}

NavBar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}

export default NavBar
