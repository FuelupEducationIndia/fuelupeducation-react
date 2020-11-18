import React from 'react';
import PropTypes from 'prop-types';

import styles from './NavBar.module.scss';
import navData from './nav-links';

import arrowDown from '../../../assets/images/arrow-down.png';

const NavBar = ({ isAuth }) => {
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
        <li className={styles.NavItem}>Team</li>
      </ul>
      <ul className={styles.NavigationSecond}>
        <li className={styles.NavSecondItem}>Sign in</li>
        <li className={styles.NavSecondItem}>Start Learning</li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default NavBar;
