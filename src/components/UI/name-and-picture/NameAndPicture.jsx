import React from 'react'

import ProfileImage from '../../../assets/profilePageImages/profile-image.png'
import styles from './NameAndPicture.module.scss'

const NameAndPicture = () => {
  return (
    <div className={styles.NameAndPicture}>
      <h2 className={styles.Heading}>Sarah William</h2>
      <div className={styles.PictureAndNick}>
        <img src={ProfileImage} alt="profile " />
        <span className={styles.NickNameLabel}>Nick Name:</span>
        <span className={styles.NickName}>Sarah</span>
      </div>
    </div>
  )
}

export default NameAndPicture
