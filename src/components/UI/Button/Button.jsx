/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

import { ArrowRightIcon } from '../../icons/icons'

const Button = ({ typeBtn = 'button', text, className, icon }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={typeBtn} className={styles[className]}>
      {text}
      {icon === 'ArrowRight' ? <ArrowRightIcon className={icon} /> : ''}
    </button>
  )
}

Button.propTypes = {
  typeBtn: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

Button.defaultProps = {
  icon: '',
}

export default Button
