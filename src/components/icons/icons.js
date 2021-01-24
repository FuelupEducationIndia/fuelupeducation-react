import React from 'react'
/* eslint-disable react/react-in-jsx-scope */
import Mail from './icons-svg/mail'

const Icon = props => {
  switch (props.name) {
    case 'mail':
      return <Mail {...props} />

    default:
      return <Mail {...props} />
  }
}
export default Icon
