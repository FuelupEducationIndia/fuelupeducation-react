import React, { useState } from 'react'

import caretDown from '../../../assets/signIn-signUpImages/caret_down.png'

import styles from './SelectDropDown.module.scss'

const SelectDropDown = ({
  defaultValue,
  firstValue,
  secondValue,
  thirdValue,
}) => {
  const [hideAsterisk, setHideAsterisk] = useState(false)
  const [selectValue, setSelectValue] = useState('')

  const handleChange = e => {
    setSelectValue(e.target.value)
  }

  const hide = () => {
    setHideAsterisk(!hideAsterisk)
  }

  const show = () => {
    setHideAsterisk(!hideAsterisk)
  }

  return (
    <div
      className={defaultValue === 'Role' ? styles.InputDiv : styles.InputDiv1}
      id={defaultValue === 'Country' && styles.CountrySelect}>
      <select
        value={selectValue}
        name="role"
        className={styles.Select}
        onChange={handleChange}
        onFocus={hide}
        onBlur={show}
        required>
        <option value="">{defaultValue}</option>
        <option value={firstValue}>{firstValue}</option>
        <option value={secondValue}>{secondValue}</option>
        {thirdValue && <option value={thirdValue}>{thirdValue}</option>}
      </select>
      {!hideAsterisk && selectValue === '' ? (
        <span
          id={styles.Ast}
          className={
            defaultValue === 'Role'
              ? styles.AsteriskInput3
              : styles.AsteriskInput4
          }
        />
      ) : null}
      <img src={caretDown} className={styles.Caret} alt="caret" />
    </div>
  )
}

export default SelectDropDown
