/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import FormSelect from '../../../controls/Select'
import FormInput from '../../../controls/FormInput'

import visa from '../../../images/visa.jpg'
import masterCard from '../../../images/master-card.svg'
import americanExpress from '../../../images/a-express.png'
import PaymentFooter from '../PaymentFooter'

import { payment as paymentActionType } from '../../../../../store/actions'

import { years, months } from './YearsMonths'

import styles from './CreditCard.module.scss'

const schema = yup.object().shape({
  creditCardNumber: yup
    .number()
    .test(
      'len',
      'Must be exactly 16 characters',
      val => val.toString().length === 16,
    )
    .required('Credit Card Number is a required field'),
  expireMonth: yup.object().required('Expire Month is a required field'),
  expireYear: yup.object().required('Expire Year is a required field'),
  cvvCode: yup
    .number()
    .test(
      'len',
      'Must be exactly 3 characters',
      val => val.toString().length === 3,
    )
    .required('Cvv Code is a required field'),
})

const CreditCard = () => {
  const dispatch = useDispatch()
  const payment = useSelector(state => state.payment)

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = data => {
    dispatch(paymentActionType.setCreditCardValues(data))
  }
  return (
    <div className={styles.CreditCard}>
      <div className={styles.CreditCardLogo}>
        <img
          src={visa}
          alt=""
          onClick={() =>
            dispatch(paymentActionType.setMastercardVizaAmericanexpress('visa'))
          }
        />
        <img
          src={masterCard}
          style={{ backgroundColor: 'darkslategray' }}
          alt=""
          onClick={() =>
            dispatch(
              paymentActionType.setMastercardVizaAmericanexpress('masterCard'),
            )
          }
        />
        <img
          src={americanExpress}
          alt=""
          onClick={() =>
            dispatch(
              paymentActionType.setMastercardVizaAmericanexpress(
                'americanExpress',
              ),
            )
          }
        />
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.CreditCardForm}>
          <FormInput
            id="creditCardNumber"
            type="number"
            // name="firstName"
            label="Credit Card Number"
            // defaultValue={donorInformation.firstName}
            className={styles.CreditCardFormCardNumber}
            {...register('creditCardNumber')}
            error={errors.creditCardNumber}
          />
          <Controller
            name="expireMonth"
            control={control}
            render={({ field }) => (
              <FormSelect
                {...field}
                // defaultValue={donorInformation.title}
                label="Expire Month"
                className={styles.CreditCardFormDivs}
                options={months}
                error={errors.expireMonth}
              />
            )}
          />
          <Controller
            name="expireYear"
            control={control}
            render={({ field }) => (
              <FormSelect
                {...field}
                // defaultValue={donorInformation.title}
                label="Expire Year"
                className={styles.CreditCardFormDivs}
                options={years}
                error={errors.expireYear}
              />
            )}
          />
          <FormInput
            id="cvvCode"
            type="number"
            // name="firstName"
            label="CVV Code"
            // defaultValue={donorInformation.firstName}
            className={styles.CreditCardFormDivs}
            {...register('cvvCode')}
            error={errors.cvvCode}
          />
        </div>
        <PaymentFooter />
      </form>
    </div>
  )
}

export default CreditCard
