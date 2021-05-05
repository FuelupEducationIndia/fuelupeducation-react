/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm, Controller } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useSelector, useDispatch } from 'react-redux'

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector'

import styles from './DonorInformation.module.scss'

import FormInput from '../../controls/FormInput'
import FormSelect from '../../controls/Select'

import longArrow from '../../images/long-arrow-alt-left-solid.svg'

import {
  activeTab as activeTabActionType,
  donorInformation as donorInformationActionType,
} from '../../../../store/actions'

const selectTitle = [
  { label: 'Mr.', value: 'Mr.' },
  { label: 'Mrs.', value: 'Mrs.' },
]

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is a required field'),
  lastName: yup.string().required('Last Name is a required field'),
})

const DonorInformation = props => {
  const dispatch = useDispatch()
  const yourGift = useSelector(state => state.yourGift)
  const donorInformation = useSelector(state => state.donorInformation)

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   firstName: donorInformation.firstName,
    //   lastName: donorInformation.lastName,
    // },
    resolver: yupResolver(schema),
  })

  const onSubmit = (data, e) => {
    console.log(data)
    e.preventDefault()
    dispatch(donorInformationActionType.setDonorInformation(data))
  }

  return (
    <div className={styles.DonorInformation}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.DonorInformationRows}>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <FormSelect
                {...field}
                // defaultValue={donorInformation.title}
                label="Title"
                className={styles.GenderStyles}
                options={selectTitle}
              />
            )}
          />

          <FormInput
            id="firstName"
            type="text"
            // name="firstName"
            label="First Name"
            // defaultValue={donorInformation.firstName}
            className={styles.firstNamelastNameDivs}
            {...register('firstName')}
            error={errors.firstName}
          />
          <FormInput
            id="lastName"
            type="text"
            // name="lastName"
            label="Last Name"
            // defaultValue={donorInformation.lastName}
            className={styles.firstNamelastNameDivs}
            {...register('lastName')}
            error={errors.lastName}
          />
        </div>
        <div className={styles.DonorInformationRows}>
          <FormInput
            id="companyName"
            type="text"
            name="companyName"
            label="Company Name"
            // defaultValue={donorInformation.companyName}
            className={styles.formDivs}
            {...register('companyName')}
            // error={errors.companyName}
          />
          <FormInput
            id="email"
            type="email"
            name="email"
            label="Email Addres"
            // defaultValue={donorInformation.email}
            className={styles.formDivs}
            {...register('email')}
            // error={errors.email}
          />
        </div>
        <div className={styles.DonorInformationRows}>
          <FormInput
            id="phoneNumber"
            type="number"
            name="phoneNumber"
            label="Phone Number"
            // defaultValue={donorInformation.phoneNumber}
            className={styles.formDivs}
            {...register('phoneNumber')}
            // error={errors.phoneNumber}
          />
          <FormInput
            id="ext"
            type="text"
            name="ext"
            label="Ext"
            className={styles.extDiv}
            // defaultValue={donorInformation.ext}
            {...register('ext')}
            error={errors.ext}
          />
        </div>
        <div className={styles.DonorInformationRows}>
          <FormInput
            id="addres"
            type="text"
            name="addres"
            label="Addres"
            className={styles.formDivs}
            // defaultValue={donorInformation.addres}
            {...register('addres')}
            // error={errors.addres}
          />
          <FormInput
            id="city"
            type="text"
            name="city"
            label="City"
            className={styles.formDivs}
            {...register('city')}
            // error={errors.city}
          />
        </div>
        <div className={styles.DonorInformationRows}>
          <div className={styles.formDivs}>
            <label htmlFor="userCountry">Country</label>
            <Controller
              id="userCountry"
              name="userCountry"
              control={control}
              // defaultValue={null}
              rules={{ required: true }}
              render={({ field }) => (
                <CountryDropdown
                  {...field}
                  className={styles.DonorInformationCountryRegion}
                  defaultOptionLabel="- Select -"
                />
              )}
            />
          </div>
          <div className={styles.formDivs}>
            <label htmlFor="userRegion">Province / State</label>
            <Controller
              name="userRegion"
              control={control}
              // defaultValue={null}
              rules={{ required: true }}
              render={({ field }) => (
                <RegionDropdown
                  {...field}
                  country={watch('userCountry')}
                  className={styles.DonorInformationCountryRegion}
                  blankOptionLabel="- Select -"
                />
              )}
            />
          </div>
        </div>
        <div className={styles.DonorInformationRows}>
          <FormInput
            id="postalCode"
            type="text"
            name="postalCode"
            label="Postal Code"
            // defaultValue={donorInformation.postalCode}/
            className={styles.formDivs}
            {...register('postalCode')}
            // error={errors.postalCode}
          />
        </div>
        <div className={styles.DonorInformationButtons}>
          <div>
            <img src={longArrow} alt="" />
            <button
              type="button"
              onClick={() => dispatch(activeTabActionType.setActiveTab(0))}>
              Back
            </button>
          </div>
          <div className={styles.DonorInformationButtonsRightDiv}>
            <button type="submit" className={styles.paymentDetails}>
              Payment Details
            </button>
            <span>
              Continue to complete yuor $
              {`${
                yourGift.customAmount ? yourGift.customAmount : yourGift.amount
              }`}{' '}
              donation
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default DonorInformation
