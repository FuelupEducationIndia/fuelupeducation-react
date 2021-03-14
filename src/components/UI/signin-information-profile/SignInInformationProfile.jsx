import React from 'react'

import FingerprintIcon from '../../../assets/profilePageImages/finger-print-icon.jpg'
import QRIcon from '../../../assets/profilePageImages/qr-icon.jpg'
import FaceIdIcon from '../../../assets/profilePageImages/face-id-icon.jpg'
import CheckBoxIcon from '../../../assets/profilePageImages/checkbox-icon.svg'
import styles from './SignInInformationProfile.module.scss'

const SignInInformationProfile = () => {
  return (
    <div className={styles.SignInInformationProfile}>
      <h2 className={styles.Heading}>Sign In Information</h2>
      <div className={styles.ProfileDiv}>
        <span className={styles.ProfileDivLabel}>Fingerprint:</span>
        <div
          className={`${styles.ProfileDivContent} ${styles.SignInDivContent}`}>
          <div className={styles.SignInMethod}>
            <div className={styles.SignInMethodInnerDiv}>
              <img src={FingerprintIcon} alt="finger print" />
            </div>
            <span>Fingerprint</span>
          </div>
          <img
            className={styles.CheckBoxIcon}
            src={CheckBoxIcon}
            alt="checkbox icon"
          />
        </div>
      </div>
      <div className={styles.ProfileDiv}>
        <span className={styles.ProfileDivLabel}>Face ID:</span>
        <div
          className={`${styles.ProfileDivContent} ${styles.SignInDivContent}`}>
          <div className={styles.SignInMethod}>
            <div className={styles.SignInMethodInnerDiv}>
              <img src={FaceIdIcon} alt="face id icon" />
            </div>
            <span>Face ID</span>
          </div>
          <img
            className={styles.CheckBoxIcon}
            src={CheckBoxIcon}
            alt="checkbox icon"
          />
        </div>
      </div>
      <div className={styles.ProfileDiv}>
        <span className={styles.ProfileDivLabel}>QR Code:</span>
        <div
          className={`${styles.ProfileDivContent} ${styles.SignInDivContent}`}>
          <div className={styles.SignInMethod}>
            <div className={styles.SignInMethodInnerDiv}>
              <img src={QRIcon} alt="qr code icon" />
            </div>
            <span>QR Code</span>
          </div>
          <img
            className={styles.CheckBoxIcon}
            src={CheckBoxIcon}
            alt="checkbox icon"
          />
        </div>
      </div>
    </div>
  )
}

export default SignInInformationProfile
