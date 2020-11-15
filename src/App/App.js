import React from 'react';
import PropTypes from 'prop-types';

import image from '../assets/images/image.jpg';
import styles from './App.module.scss';

const App = ({ title }) => (
  <div className={styles.Container}>
    {title}
    Hi there! Enjoy fresh cornish!
    <img className={styles.Img} src={image} alt=" Cornish" />
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
