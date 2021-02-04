import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import eye from '../../../assets/signIn-signUpImages/eye_icon.png'

import styles from './PasswordInput.module.scss'

const PasswordInput = ({ placeholder, forgotPw }) => {
  const [hideAsterisk, setHideAsterisk] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  const hide = () => {
    setHideAsterisk(!hideAsterisk)
  }

  const show = () => {
    setHideAsterisk(!hideAsterisk)
  }

  return (
    <div className={styles.PasswordDiv}>
      <div className={styles.InputDiv}>
        <input
          className={styles.input}
          type="password"
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={hide}
          onBlur={show}
          value={inputValue}
          required
        />
        {!hideAsterisk && inputValue === '' ? (
          <span
            className={
              placeholder === 'Confirm Password'
                ? styles.AsteriskInput2
                : styles.AsteriskInput1
            }
          />
        ) : null}
        <img className={styles.Eye} src={eye} alt="eye icon" />
      </div>
      {forgotPw ? (
        <Link to="/" className={styles.ForgotPw}>
          Forgot password?
        </Link>
      ) : null}
    </div>
  )
}

export default PasswordInput
