import React from 'react'

import styles from './PersonalInformationProfile.module.scss'

const PersonalInformationProfile = () => {
  return (
    <div className={styles.PersonalInformationProfile}>
      <h2 className={styles.Heading}>Personal Information</h2>
      <div className={styles.ProfileDiv}>
        <span className={styles.ProfileDivLabel}>Birth Date:</span>
        <span className={styles.ProfileDivContent}>January 1st</span>
      </div>
      <div className={styles.ProfileDiv}>
        <span className={styles.ProfileDivLabel}>Gender:</span>
        <span className={styles.ProfileDivContent}>Female</span>
      </div>
    </div>
  )
}

export default PersonalInformationProfile
