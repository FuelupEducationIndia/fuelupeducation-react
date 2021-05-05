/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import PropTypes from 'prop-types'

const customStyles = {
  width: '100%',
  border: 'none',
  height: '30px',
  borderBottom: '1px solid lightgray',
  outline: 'none',
  paddingTop: '10px',
}

const FormInput = ({
  error,
  label,
  id,
  register,
  // defaultValue,
  className,
  ...inputProps
}) => {
  return (
    <>
      <div className={className}>
        <label htmlFor={id}>{label}</label>
        <input
          style={customStyles}
          ref={register}
          id={id}
          // defaultValue={defaultValue}
          {...inputProps}
        />
        {error && <p style={{ color: 'red' }}>{error.message}</p>}
      </div>
    </>
  )
}

FormInput.propTypes = {
  register: PropTypes.func.isRequired,
  error: PropTypes.objectOf.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default FormInput
