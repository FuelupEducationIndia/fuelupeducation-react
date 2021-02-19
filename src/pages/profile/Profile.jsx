import React from 'react'

import Header from '../../components/UI/header/Header'
import ProfileDetails from '../../components/UI/profile-details/ProfileDetails'
import FloatingGirl from '../../assets/profilePageImages/floating-girl.svg'

import styles from './Profile.module.scss'

const Profile = () => {
    return (
        <div className={styles.ProfileDiv}>
            <Header />
            <div className={styles.ProfileDetailsDiv}>
                <ProfileDetails />
                <img className={styles.FloatingGirl} src={FloatingGirl} alt="floating girl"/>
            </div>
        </div>
    )
}

export default Profile
