import React from 'react'
import PropTypes from 'prop-types'
import styles from './AppStore.module.scss'

import GoogleStore from '../../../assets/images/group-54.png'
import AppleStore from '../../../assets/images/group-57.png'

const AppStore = ({ text, className }) => {
  return (
    <div className={styles[className]}>
      <p>{text}</p>
      <a href="/googlestore">
        <img src={GoogleStore} alt="GoogleStore" />
      </a>
      <a href="/appsore">
        <img src={AppleStore} alt="AppleStore" />
      </a>
    </div>
  )
}

AppStore.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default AppStore
