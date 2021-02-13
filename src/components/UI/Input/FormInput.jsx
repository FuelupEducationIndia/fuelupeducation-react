import React from 'react'

import PropTypes from 'prop-types'
import { useFormInput } from './utils'
import buildClassName from '../../../utils/buildClassName'

const FormInput = ({
  type,
  autoComplete,
  className,
  placeholder,
  name,
  disabled,
}) => {
  const id = `${name}-${Date.now()}`
  const { inputRef, control, value, isTouched } = useFormInput(name)

  const fullClassName = buildClassName(className, 'some styles', 'and more')
  return (
    <label className={fullClassName} htmlFor={id}>
      <input
        id={id}
        name={name}
        ref={inputRef}
        className={fullClassName}
        type={type}
        disabled={disabled}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
    </label>
  )
}
FormInput.propTypes = {
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
}

FormInput.defaultProps = {
  disabled: false,
  autoComplete: 'on',
  type: 'text',
  placeholder: '',
}
export default FormInput
