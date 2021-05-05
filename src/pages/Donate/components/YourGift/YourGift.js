/* eslint-disable react/jsx-closing-bracket-location */ /* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'

import {
  yourGift as yourGiftActionType,
  activeTab as activeTabActionType,
} from '../../../../store/actions'

import styles from './YourGift.module.scss'

const YourGift = props => {
  const dispatch = useDispatch()
  const yourGift = useSelector(state => state.yourGift)

  return (
    <div className={styles.YourGift}>
      <div className={styles.YourGiftFirstRowButtons}>
        <button
          type="button"
          className={
            yourGift.typeOfDonation === 'oneTimeDonation'
              ? styles.activeDonateButton
              : null
          }
          onClick={() =>
            dispatch(yourGiftActionType.setDonationType('oneTimeDonation'))}>
          On Time Donation
        </button>
        <button
          type="button"
          className={
            yourGift.typeOfDonation === 'monthlyDonation'
              ? styles.activeDonateButton
              : null
          }
          onClick={() =>
            dispatch(yourGiftActionType.setDonationType('monthlyDonation'))}>
          Monthly Donation
        </button>
      </div>
      <div className={styles.YourGiftSecondRowButtons}>
        <button
          type="button"
          name="$25"
          className={yourGift.amount === 25 ? styles.activeDonateButton : null}
          onClick={() => dispatch(yourGiftActionType.setDonationType(25))}>
          $25
        </button>
        <button
          type="button"
          name="$50"
          className={yourGift.amount === 50 ? styles.activeDonateButton : null}
          onClick={() => dispatch(yourGiftActionType.setDonationType(50))}>
          $50
        </button>
        <button
          type="button"
          name="$75"
          className={yourGift.amount === 75 ? styles.activeDonateButton : null}
          onClick={() => dispatch(yourGiftActionType.setDonationType(75))}>
          $75
        </button>
        <input
          type="number"
          defaultValue={yourGift.customAmount}
          value={yourGift.customAmount}
          placeholder="Custom Amount"
          onChange={e =>
            dispatch(yourGiftActionType.setDonationType(e.target.value))}
        />
      </div>
      <div className={styles.YourGiftThirdRowButtons}>
        <button
          type="submit"
          onClick={() => dispatch(activeTabActionType.setActiveTab(1))}>
          Donor Info
        </button>
      </div>
    </div>
  )
}

export default YourGift
