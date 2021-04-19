/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  yourGift as yourGiftActionType,
  activeTab as activeTabActionType,
} from '../../../../store/actions'

import styles from './YourGift.module.scss'

const YourGift = props => {
  const { setDonationMethod, yourGift, setActiveTab } = props

  const [chooseDonation, setChoosDonation] = useState(yourGift)

  // toggling One Time Donation or Monthly
  const setFirstRowButtons = e => {
    const updateObject = chooseDonation.firstRowButtons
    Object.keys(updateObject).forEach(item => {
      if (item === e.target.name) {
        updateObject[item] = true
      } else {
        updateObject[item] = false
      }
    })
    setChoosDonation({
      ...chooseDonation,
      firstRowButtons: updateObject,
      customAmount: '',
    })
  }

  // toggling price
  const setSecondRowButtons = e => {
    const updateObject = chooseDonation.secondRowButtons
    Object.keys(updateObject).forEach(item => {
      if (item === e.target.name) {
        updateObject[item] = true
      } else {
        updateObject[item] = false
      }
    })
    setChoosDonation({
      ...chooseDonation,
      secondRowButtons: updateObject,
      customAmount: '',
    })
  }

  // Custom Amount
  const handleInputChange = e => {
    const updateObject1 = chooseDonation.firstRowButtons
    Object.keys(updateObject1).forEach(item => {
      updateObject1[item] = false
    })

    const updateObject2 = chooseDonation.secondRowButtons
    Object.keys(updateObject2).forEach(item => {
      updateObject2[item] = false
    })
    setChoosDonation({
      firstRowButtons: updateObject1,
      secondRowButtons: updateObject2,
      customAmount: e.target.value,
    })
  }

  // Save in the Redux State
  useEffect(() => {
    setDonationMethod(chooseDonation)
  }, [chooseDonation])

  return (
    <div className={styles.YourGift}>
      <div className={styles.YourGiftFirstRowButtons}>
        <button
          name="oneTimeDonation"
          type="button"
          className={
            chooseDonation.firstRowButtons.oneTimeDonation
              ? styles.activeDonateButton
              : null
          }
          onClick={setFirstRowButtons}>
          On Time Donation
        </button>
        <button
          name="monthlyDonation"
          type="button"
          className={
            chooseDonation.firstRowButtons.monthlyDonation
              ? styles.activeDonateButton
              : null
          }
          onClick={setFirstRowButtons}>
          Monthly Donation
        </button>
      </div>
      <div className={styles.YourGiftSecondRowButtons}>
        <button
          type="button"
          name="$25"
          className={
            chooseDonation.secondRowButtons.$25
              ? styles.activeDonateButton
              : null
          }
          onClick={setSecondRowButtons}>
          $25
        </button>
        <button
          type="button"
          name="$50"
          className={
            chooseDonation.secondRowButtons.$50
              ? styles.activeDonateButton
              : null
          }
          onClick={setSecondRowButtons}>
          $50
        </button>
        <button
          type="button"
          name="$75"
          className={
            chooseDonation.secondRowButtons.$75
              ? styles.activeDonateButton
              : null
          }
          onClick={setSecondRowButtons}>
          $75
        </button>
        <input
          type="text"
          value={chooseDonation.customAmount}
          placeholder="Custom Amount"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.YourGiftThirdRowButtons}>
        <button type="submit" onClick={() => setActiveTab(1)}>
          Donor Info
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  yourGift: state.yourGift,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setDonationMethod: yourGiftActionType.setDonationMethod,
      setActiveTab: activeTabActionType.setActiveTab,
    },
    dispatch,
  )

YourGift.propTypes = {
  yourGift: PropTypes.shape({
    firstRowButtons: PropTypes.shape({
      oneTimeDonation: PropTypes.bool.isRequired,
      monthlyDonation: PropTypes.bool.isRequired,
    }),
    secondRowButtons: PropTypes.shape({
      $25: PropTypes.bool.isRequired,
      $50: PropTypes.bool.isRequired,
      $75: PropTypes.bool.isRequired,
    }),
    customAmount: PropTypes.string.isRequired,
  }).isRequired,
  setDonationMethod: PropTypes.func.isRequired,
  setActiveTab: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(YourGift)
