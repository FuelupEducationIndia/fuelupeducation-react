import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import FloatingGirl from '../../assets/profilePageImages/floating-girl.svg'
import Header from '../../components/UI/header/Header'
import ProfileDetails from '../../components/UI/profile-details/ProfileDetails'

import styles from './Profile.module.scss'
import ProfileEdit from '../../components/UI/profile-edit/ProfileEdit'

const Profile = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  const query = useQuery()

  useEffect(() => {
    console.log(query.get('type'))
  }, [query.get('type')])

  return (
    <div className={styles.ProfileDiv}>
      <Header />
      <div className={styles.ProfileDetailsDiv}>
        {query.get('type') ? (
          <ProfileEdit />
        ) : (
          <>
            <ProfileDetails />
            <img
              className={`${
                query.get('type')
                  ? styles.FloatingGirlEdit
                  : styles.FloatingGirlProfile
              }`}
              src={FloatingGirl}
              alt="floating girl"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Profile
