/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import Select, { components } from 'react-select'
import PropTypes from 'prop-types'

import ArrowDown from './arrow-down.svg'

const CaretDownIcon = () => {
  return <img src={ArrowDown} alt="" />
}

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  )
}

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    height: '30px',
  }),
  control: (provided, state) => ({
    ...provided,
    minHeight: '30px',
    border: 'none',
    borderBottom: '1px solid lightgray',
    boxShadow: '0',
    '&:hover': {
      borderBottom: '1px solid lightgray',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    height: '20px',
    fontSize: '1.2rem',
    color: 'gray',
    padding: '20px 10px',
    alignItems: 'center',
    backgroundColor: state.isSelected ? 'lightBlue' : null,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: '30px',
    alignItems: 'flex-end',
    padding: '0',
  }),
  input: (provided, state) => ({
    ...provided,
    height: '30px',
    margin: '0px',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: '1.2rem',
    transform: 'translateY(-40%)',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    height: '30px',
    transform: 'translateY(-40%)',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: '30px',
    alignItems: 'flex-end',
  }),
  indicatorContainer: (provided, state) => ({
    ...provided,
    padding: '5px',
  }),
  indicatorSeparator: (provided, state) => ({
    backgroundColor: 'none',
  }),
}

const FormSelect = ({
  label,
  options,
  id,
  className,
  onChange,
  error,
  // defaultValue,
}) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <Select
        components={{ DropdownIndicator }}
        styles={customStyles}
        id={id}
        options={options}
        onChange={onChange}
        // defaultValue={defaultValue}
      />
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  )
}

FormSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.objectOf.isRequired,
  // defaultValue: PropTypes.objectOf(
  //   PropTypes.shape({
  //     label: PropTypes.string.isRequired,
  //     value: PropTypes.string.isRequired,
  //   }),
  // ).isRequired,
}

export default FormSelect
