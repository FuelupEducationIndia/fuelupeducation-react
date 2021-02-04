import React, { useState } from 'react'

import styles from './Input.module.scss'

const Input = ({ placeholder, type }) => {
  const [hideAsterisk, setHideAsterisk] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [dateType, setDateType] = useState('text')

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  const hide = () => {
    setHideAsterisk(!hideAsterisk)
    if (type === 'date') {
      setDateType(type)
    }
  }

  const show = () => {
    setHideAsterisk(!hideAsterisk)
    if (type === 'date') {
      setDateType('text')
    }
  }

  return (
    <div className={styles.InputDiv}>
      <input
        className={styles.input}
        type={dateType}
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
            placeholder === 'Email/Phone number'
              ? styles.AsteriskInput1
              : styles.AsteriskInput2
          }
          id={
            (placeholder === 'First Name' ||
              placeholder === 'Last Name' ||
              'Birth Date') &&
            styles.Name
          }
        />
      ) : null}
    </div>
  )
}

export default Input
