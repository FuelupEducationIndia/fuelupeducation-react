import React, { useState, useRef } from 'react'
import { useFormContext } from 'react-hook-form'

import styles from './Input.module.scss'

const Input = ({ labelInputId, label, type, name }) => {
  const { register } = useFormContext();

  const [hideAsterisk, setHideAsterisk] = useState(false);
  const [dateType, setDateType] = useState('text');

  const labelRef = useRef(null);
  const input = document.getElementById(labelInputId);

  const hide = () => {
    setHideAsterisk(true);
   
    if (type === 'date') {
      setDateType('date')
    }
    // input && console.log(input.value, labelInputId);
    labelRef.current.style.display = 'none';
  }

  const show = () => {
    if (type === 'date') {
      setDateType('text')
    }

    if(input) {
      if(input.value === '') {
        labelRef.current.style.display = '';
        setHideAsterisk(false)
      }
    }
  }

  return (
    <div className={styles.InputDiv}>
      <div className={styles.LabelAsterisk}>
        <label htmlFor={labelInputId} ref={labelRef} className={styles.Label}>{label}</label>
        {
          !hideAsterisk ? (
            <span className={styles.AsteriskInput} />
          ) : null
        }
      </div>
      <input
        className={styles.input}
        name={name}
        id={labelInputId}
        type={type === 'date' ? dateType : type }
        onFocus={hide}
        onBlur={show}
        ref={register({ required: true })}
      />
    </div>
  )
}

export default Input
