import React from 'react'

import styles from './EducationInformationProfile.module.scss'

const EducationInformationProfile = () => {
  return (
    <div className={styles.EducationInformationProfile}>
      <h2 className={styles.Heading}>Educational Information</h2>
      <div className={styles.ProfileDiv}>
        <span className={styles.ProfileDivLabel}>Board/University:</span>
        <span className={styles.ProfileDivContent}>
          Rajsthan Technical University, Kota
        </span>
      </div>
      <div className={styles.ProfileDiv}>
        <span className={styles.ProfileDivLabel}>Major:</span>
        <span className={styles.ProfileDivContent}>Computer Science</span>
      </div>
      <div className={styles.ProfileDiv}>
        <span className={styles.ProfileDivLabel}>Position:</span>
        <span className={styles.ProfileDivContent}>Instructor</span>
      </div>
    </div>
  )
}

export default EducationInformationProfile
