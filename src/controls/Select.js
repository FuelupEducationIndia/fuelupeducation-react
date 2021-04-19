/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const FormSelect = React.forwardRef(
  ({ label, options, id, onChange, value }, ref) => (
    <>
      <label htmlFor={id}>{label}</label>
      <Select id={id} options={options} onChange={onChange} ref={ref} />
    </>
  ),
)

FormSelect.propTypes = {
  options: PropTypes.arrayOf.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf.isRequired,
}

export default FormSelect
