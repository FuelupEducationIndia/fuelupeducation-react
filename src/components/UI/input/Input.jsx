import React, { useState, useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import PropTypes from 'prop-types'

import styles from './Input.module.scss'

const Input = ({
  labelInputId,
  label,
  type,
  name,
  required,
  classNameProps,
  inputDivClassNameProps,
  asteriskOnInput,
}) => {
  const { register } = useFormContext()

  const [hideAsterisk, setHideAsterisk] = useState(false)
  const [dateType, setDateType] = useState('text')

  const labelRef = useRef(null)
  const input = document.getElementById(labelInputId)

  const hide = () => {
    setHideAsterisk(true)

    if (type === 'date') {
      setDateType('date')
    }

    labelRef.current.style.display = 'none'
  }

  const show = () => {
    if (type === 'date') {
      setDateType('text')
    }

    if (input) {
      if (input.value === '') {
        labelRef.current.style.display = ''
        setHideAsterisk(false)
      }
    }
  }

  return (
    <div className={`${styles.InputDivGeneral} ${inputDivClassNameProps}`}>
      <div className={styles.LabelAsterisk}>
        <label htmlFor={labelInputId} ref={labelRef} className={styles.Label}>
          {label}
        </label>
        {!hideAsterisk && asteriskOnInput ? (
          <span className={styles.AsteriskInput} />
        ) : null}
      </div>
      <input
        className={classNameProps}
        name={name}
        id={labelInputId}
        type={type === 'date' ? dateType : type}
        onFocus={hide}
        onBlur={show}
        ref={register({ required })}
      />
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  labelInputId: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  asteriskOnInput: PropTypes.bool,
  classNameProps: PropTypes.string,
  inputDivClassNameProps: PropTypes.string,
}

export default Input
