import React from 'react';
import PropTypes from 'prop-types';

import image from '../assets/images/image.jpg';
import styles from './App.module.css';

const App = ({ title }) => (
  <div className={styles.Container}>
    {title}
    one more and more
    <br />
    here we have more styles hi there one more hi!
    <br />
    asdasd
    <br />
    asdasd
    <br />
    suki
    <img src={image} alt=" here" />
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
