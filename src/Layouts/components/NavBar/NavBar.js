import React from 'react';
import PropTypes from 'prop-types';

import styles from './NavBar.module.scss';

const NavBar = ({ isAuth }) => {
  return (
    <div className={styles.Navigation}>Navigation will be here</div>
  );
};

NavBar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default NavBar;
