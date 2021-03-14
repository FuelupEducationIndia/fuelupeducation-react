import React from 'react'

import styles from './ContactInformationProfile.module.scss'

const ContactInformationProfile = () => {
  return (
    <div className={styles.ContactInformationProfile}>
      <h2 className={styles.Heading}>Contact Information</h2>
      <div className={styles.ProfileDiv}>
        <span className={styles.ProfileDivLabel}>Mailing Address:</span>
        <span className={styles.ProfileDivContent}>1234 No Name St</span>
      </div>
      <div className={styles.ProfileDiv}>
        <span className={styles.ProfileDivLabel}>Email Address:</span>
        <span className={styles.ProfileDivContent}>sarahwilliam@gmail.com</span>
      </div>
      <div className={styles.ProfileDiv}>
        <span className={styles.ProfileDivLabel}>Mobile Phone:</span>
        <span className={styles.ProfileDivContent}>123-456-7890</span>
      </div>
    </div>
  )
}

export default ContactInformationProfile
