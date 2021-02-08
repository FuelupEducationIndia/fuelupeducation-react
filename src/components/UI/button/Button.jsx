import React from 'react'

// import styles from './Button.module.scss'

const Button = ({ type, children, className }) => {
  return (
    <button type={type} className={className}>
      { children }
    </button>
  )
}

export default Button
