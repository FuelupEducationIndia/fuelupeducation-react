import React from 'react'

import styles from './Button.module.scss'

const Button = ({ onClick, value, continueBtn }) => {
  return (
    <div>
      <input
        type="button"
        onClick={onClick}
        className={styles.SignInBtn}
        value={value}
        id={continueBtn && styles.ContinueBtn}
      />
    </div>
  )
}

export default Button
