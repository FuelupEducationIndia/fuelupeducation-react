import React from 'react'
import PropTypes from 'prop-types'
import styles from './AppStore.module.scss'

import { GoogleStoreIcon, AppleStoreIcon } from '../../icons/icons'

const AppStore = ({ text, className }) => {
  return (
    <div className={styles[className]}>
      <p>{text}</p>
      <a href="/googlestore">
        <GoogleStoreIcon className="GoogleStore" />
      </a>
      <a href="/appsore">
        <AppleStoreIcon className="AppleStore" />
      </a>
    </div>
  )
}

AppStore.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default AppStore
