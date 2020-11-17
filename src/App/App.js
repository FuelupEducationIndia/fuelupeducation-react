import React from 'react';
import PropTypes from 'prop-types';

import styles from './App.module.scss';

const App = ({ title }) => (
  <div className={styles.Container}>
    Hello .\
    <br />
    {title}
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
