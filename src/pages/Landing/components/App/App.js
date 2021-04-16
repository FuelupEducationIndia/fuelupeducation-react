/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'

import styles from './App.module.scss'
import AppStore from '../../../../components/UI/AppStore/AppStore'
import DemoApp from '../../images/image-2.png'

const App = ({ className, header, paragraph }) => {
  return (
    <div className={styles.App}>
      <div className={styles.App__Info}>
        <h1>{header}</h1>
        <AppStore className="AppStore" text={paragraph} />
      </div>
      <div className={styles.App__Demo}>
        <img src={DemoApp} alt="DemoApp" />
      </div>
    </div>
  )
}

App.propTypes = {
  className: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
}

export default App
