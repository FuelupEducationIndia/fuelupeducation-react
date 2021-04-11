import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './DropDownSelect.module.scss'

const DropDownSelect = props => {
  return (
    <div className={styles.div60W}>
      <select className={styles.formSelect}>
        {props.getoptions.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}

DropDownSelect.propTypes = {
  getoptions: PropTypes.array.isRequired,
}

export default DropDownSelect
