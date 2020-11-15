import React from 'react';
import PropTypes from 'prop-types';

import image from '../assets/images/image.jpg';
import styles from './App.module.css';

const App = ({ title }) => (
  <div className={styles.Container}>
    {title}
    Hi there! Enjoy fresh cornish!
    <img src={image} alt=" Cornish" />
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
