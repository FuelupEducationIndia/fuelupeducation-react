/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { payment as paymentActionType } from '../../../../store/actions'

import CreditCard from './CreditCard/CreditCard'

import styles from './Payment.module.scss'
import PaymentFooter from './PaymentFooter'

const Payment = () => {
  const dispatch = useDispatch()
  const payment = useSelector(state => state.payment)
  return (
    <div className={styles.Payment}>
      <div className={styles.PaymentPaymentTypeButtons}>
        <button
          type="button"
          className={
            payment.paymentType === 'creditCard'
              ? styles.activePaymentButton
              : null
          }
          onClick={() =>
            dispatch(paymentActionType.setPaymentType('creditCard'))
          }>
          Credit Card
        </button>
        <button
          type="button"
          className={
            payment.paymentType === 'payPal' ? styles.activePaymentButton : null
          }
          onClick={() => dispatch(paymentActionType.setPaymentType('payPal'))}>
          PayPal
        </button>
        <button
          type="button"
          className={
            payment.paymentType === 'razzorPay'
              ? styles.activePaymentButton
              : null
          }
          onClick={() =>
            dispatch(paymentActionType.setPaymentType('razzorPay'))
          }>
          RazzorPay
        </button>
        <button
          type="button"
          className={
            payment.paymentType === 'offlineDonation'
              ? styles.activePaymentButton
              : null
          }
          onClick={() =>
            dispatch(paymentActionType.setPaymentType('offlineDonation'))
          }>
          Offline Donation
        </button>
      </div>
      {payment.paymentType === 'creditCard' ? (
        <CreditCard />
      ) : payment.paymentType === 'payPal' ? (
        <div>PayPAl</div>
      ) : payment.paymentType === 'razzorPay' ? (
        <div>RazzorPay</div>
      ) : payment.paymentType === 'offlineDonation' ? (
        <div className={styles.PaymentOfflineDonation}>
          <p style={{ marginBottom: '20px' }}>
            In ordet to make an offline donation we ask that you please follow
            these instructions:
          </p>
          <p>Make a check paybal to "FuelUpEducation".</p>
          <p>
            On the memo line of the check, please indicate that the donation is
            for "FuelUp Education"
          </p>
          <p>Please mail your check to:</p>
          <div style={{ marginLeft: '20px' }}>
            <p>FuelUp Education</p>
            <p>111 Not A Real St.</p>
            <p>Anytown,CA 12345</p>
          </div>
          <p style={{ marginTop: '20px' }}>
            All contributions will be gratefully acknowledgedacd are tax
            deducttible.
          </p>
          <PaymentFooter />
        </div>
      ) : null}
    </div>
  )
}

export default Payment
