/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import PropTypes from 'prop-types'

const FormInput = ({ register, error, label, id, ...inputProps }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input ref={register} id={id} {...inputProps} />
      {error && <div>{error.message}</div>}
    </>
  )
}

FormInput.propTypes = {
  register: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default FormInput
