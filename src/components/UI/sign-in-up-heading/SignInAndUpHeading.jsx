import React from 'react'

import styles from './SignInAndUpHeading.module.scss'

const SignInAndUpHeading = ({ h1Text, spanText }) => {
  return (
    <div className={styles.SignInHeading}>
      <h1>{h1Text}</h1>
      <span>{spanText}</span>
    </div>
  )
}

export default SignInAndUpHeading
