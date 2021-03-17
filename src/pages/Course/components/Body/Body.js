/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import ReactDOM from 'react-dom'
import userBanner from 'assets/images/userBanner.png'
import styles from './Body.module.scss'

const Body = () => {
  return (
    <div className={styles.Body}>
      <div className="user-banner">
        <div
          className="user-banner-left"
          style={{
            width: '50%',
            float: 'left',
            clear: 'both',
          }}
        >
          <h1>
            Welcom
            <span> Sheela!</span>
          </h1>
          <p>Check Whats up with your Schedule....</p>
        </div>
        <div
          className="user-banner-right"
          style={{
          width: '50%',
          float: 'left',
          bottom: '18px',
          right: '20px',
          position: 'relative',
          textAlign:'right',
        }}
        >
          <img src={userBanner} />
        </div>
      </div>
    </div>
  )
}

export default Body
