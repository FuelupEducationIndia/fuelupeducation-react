import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

import styles from './CustomCheckbox.module.scss'

const CustomCheckbox = ({ labelInputId, name, size }) => {
  const { register } = useFormContext();

  return (
    <div className={styles.checkBoxInnerDiv}>
      <input
        className={ size === "big" ? styles.bigCheckboxR : styles.bigCheckbox }
        id={labelInputId}
        name={name}
        type="checkbox"
        ref={register({ required: true })}
      />
      <label htmlFor={labelInputId} />
    </div>
  )
}

CustomCheckbox.propTypes = {
  labelInputId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
}

export default CustomCheckbox
