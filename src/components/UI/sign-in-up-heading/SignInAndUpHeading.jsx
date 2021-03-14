import React from 'react'
import PropTypes from 'prop-types'

import styles from './SignInAndUpHeading.module.scss'

const SignInAndUpHeading = ({ h1Text, spanText }) => {
  return (
    <div className={styles.SignInHeading}>
      <h1>{h1Text}</h1>
      <span>{spanText}</span>
    </div>
  )
}

SignInAndUpHeading.propTypes = {
  h1Text: PropTypes.string.isRequired,
  spanText: PropTypes.string.isRequired,
}

export default SignInAndUpHeading
