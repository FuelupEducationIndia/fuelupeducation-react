import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import styles from './Landing.module.scss';
import Hero from './components/Hero/Hero';

const Landing = (props) => {
  return (
    <div className={styles.Landing}>
      <NavBar isAuth={false} />
      <Hero />
      <div className={styles.backgroundImage} />
    </div>
  );
};

Landing.propTypes = {};

export default Landing;
