/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux'

import { activeTab as activeTabActionType } from '../../store/actions'

import { ReactComponent as Heart } from './images/heart-solid.svg'
import { ReactComponent as CreditCard } from './images/credit-card-regular.svg'
import { ReactComponent as AddressCard } from './images/address-card-solid.svg'

import styles from './Donate.module.scss'

import NavBar from '../Landing/components/NavBar/NavBar'
import YourGift from './components/YourGift/YourGift'
import DonorInformation from './components/DonateInformation/DonorInformation'
import Payment from './components/Payment/Payment'

const Donate = props => {
  const dispatch = useDispatch()
  const activeTab = useSelector(state => state.activeTab)

  return (
    <div className={styles.Donate}>
      <NavBar isAuth={false} />
      <div className={styles.DonateContainer}>
        <div className={styles.DonateSidebarLeft} />
        <div className={styles.DonateRightContainer}>
          <h1>FueUp Education Donation</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            ipsa, placeat excepturi reprehenderit tenetur deserunt fugit itaque
            impedit voluptatibus numquam! Eveniet dolore impedit quas recusandae
            deleniti ab vel hic ea! Lorem ipsum dolor sit amet consectetur
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            dolores unde id reprehenderit praesentium iure sequi incidunt quae
            blanditiis, placeat temporibus dignissimos quasi fugit doloribus
          </p>
          <div className={styles.DonateTitleCards}>
            <div
              className={
                activeTab === 0 ? styles.donateActiveTabs : styles.donateTabs
              }
              onClick={() => dispatch(activeTabActionType.setActiveTab(0))}>
              <Heart fill={activeTab === 0 ? '#3b0e8a' : 'lightgray'} />
              <h4>YOUR GIFT</h4>
            </div>
            <div
              className={
                activeTab === 1 ? styles.donateActiveTabs : styles.donateTabs
              }
              onClick={() => dispatch(activeTabActionType.setActiveTab(1))}>
              <AddressCard fill={activeTab === 1 ? '#3b0e8a' : 'lightgray'} />
              <h4>DONOR INFORMATION</h4>
            </div>
            <div
              className={
                activeTab === 2 ? styles.donateActiveTabs : styles.donateTabs
              }
              onClick={() => dispatch(activeTabActionType.setActiveTab(2))}>
              <CreditCard fill={activeTab === 2 ? '#3b0e8a' : 'lightgray'} />
              <h4>PAYMENT</h4>
            </div>
          </div>
          {activeTab === 0 ? (
            <YourGift />
          ) : activeTab === 1 ? (
            <DonorInformation />
          ) : (
            <Payment />
          )}
        </div>
      </div>
    </div>
  )
}

export default Donate
