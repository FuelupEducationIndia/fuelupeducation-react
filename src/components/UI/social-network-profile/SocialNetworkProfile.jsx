/** eslint-disable */

import React from 'react'

import GooglePlus from '../../../assets/profilePageImages/google-plus.svg'
import FaceBook from '../../../assets/profilePageImages/fb-icon.svg'
import Twitter from '../../../assets/profilePageImages/twitter-icon.svg'
import styles from './SocialNetworkProfile.module.scss'

const SocialNetworkProfile = () => {
  return (
    <div className={styles.SocialNetworkProfile}>
      <h2 className={styles.Heading}>Social Networks</h2>
      <button className={styles.SocialLinkButton} id={styles.LinkedIn}>
        <span className={styles.SocialLinkButtonIcon}>
          <i className="fab fa-linkedin-in" />
        </span>
        <span className={styles.SocialLinkButtonContent}>LinkedIn</span>
      </button>
      <button className={styles.SocialLinkButton} id={styles.GooglePlus}>
        <span className={styles.SocialLinkButtonIcon}>
          <img src={GooglePlus} alt="Google Plus Logo" />
        </span>
        <span className={styles.SocialLinkButtonContent}>Google +</span>
      </button>
      <button className={styles.SocialLinkButton} id={styles.FaceBook}>
        <span className={styles.SocialLinkButtonIcon}>
          <img src={FaceBook} alt="FaceBook logo" />
        </span>
        <span className={styles.SocialLinkButtonContent}>FaceBook</span>
      </button>
      <button className={styles.SocialLinkButton} id={styles.Instagram}>
        <span className={styles.SocialLinkButtonIcon}>
          <i className="fab fa-instagram" />
        </span>
        <span className={styles.SocialLinkButtonContent}>Instagram</span>
      </button>
      <button className={styles.SocialLinkButton} id={styles.Twitter}>
        <span className={styles.SocialLinkButtonIcon}>
          <img src={Twitter} alt="Twitter logo" />
        </span>
        <span className={styles.SocialLinkButtonContent}>Twitter</span>
      </button>
    </div>
  )
}

export default SocialNetworkProfile
