import React from 'react'
import ProfileInfoUpdated from './Components/ProfileInfoUpdate'
import styles from './ProfilePage.module.scss'

const ProfilePage = props => {
  return (
    <div className={styles.mainBody}>
      <ProfileInfoUpdated />
    </div>
  )
}

ProfilePage.propTypes = {}

export default ProfilePage
