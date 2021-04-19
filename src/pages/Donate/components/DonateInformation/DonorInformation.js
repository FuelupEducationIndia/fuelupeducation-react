import React, { useState } from 'react'
import ReactSelect from 'react-select'
import PropTypes from 'prop-types'
import { useForm, Controller } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import styles from './DonorInformation.module.scss'

import FormInput from '../../../../controls/FormInput'
import FormSelect from '../../../../controls/Select'

const option = [
  { value: 'Mr.', label: 'Mr.' },
  { value: 'Ms.', label: 'Ms.' },
]

const schema = yup.object().shape({
  FirstName: yup.string().max(5, 'some pass').required(),
})

const DonorInformation = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className={styles.DonorInformation}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.DonorInformationFirstRow}>
          <FormInput
            id="FirstName"
            type="text"
            name="FirstName"
            label="First Name"
            {...register('FirstName')}
            error={errors.FirstName}
          />
          <Controller
            name="select2"
            control={control}
            render={({ field }) => (
              <FormSelect
                {...field}
                label="ReactSelect2"
                options={option}
                id="select2"
              />
            )}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}

DonorInformation.propTypes = {}

export default DonorInformation
