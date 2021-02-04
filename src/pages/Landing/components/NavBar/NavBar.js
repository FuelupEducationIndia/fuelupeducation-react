import React from 'react'
import PropTypes from 'prop-types'

import styles from './NavBar.module.scss'

import arrowDown from '../../../../assets/images/arrow-down.png'

const NavBar = ({
  showSignIn,
  setShowSignIn,
  showSignUp,
  setShowSignUp,
  isAuth,
}) => {
  const handleClick = () => {
    setShowSignIn(!showSignIn)
    setShowSignUp(false)
  }
  const handleClick2 = () => {
    setShowSignUp(!showSignUp)
    setShowSignIn(false)
  }

  return (
    <nav className={styles.Navigation}>
      <div className={styles.logo}>
        <strong>Fuelup </strong>
        Education
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
        <li className={styles.NavItem}>Pricing</li>
      </ul>
      <ul className={styles.NavigationSecond}>
        <li className={styles.NavSecondItem} onClick={handleClick}>
          Sign in
        </li>
        <li className={styles.NavSecondItem} onClick={handleClick2}>
          Sign up
        </li>
      </ul>
    </nav>
  )
}

NavBar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}

export default NavBar
