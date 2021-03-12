import React from 'react'

import styles from './NameAndPicture.module.scss'
import ProfileImage from 'assets/profilePageImages/profile-image.png'

const NameAndPicture = () => {
    return (
        <div className={styles.NameAndPicture}>
            <h2 className={styles.Heading}>Sarah William</h2>
            <div className={styles.PictureAndNick}>
                <img src={ProfileImage} alt="profile image" />
                <span className={styles.NickNameLabel}>Nick Name:</span>
                <span className={styles.NickName}>Sarah</span>
            </div>
        </div>
    )
}

export default NameAndPicture
