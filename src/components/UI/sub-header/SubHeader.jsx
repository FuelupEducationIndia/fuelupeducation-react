import React from 'react'

// import WomanInProfile from 'assets/profilePageImages/woman-in-profile.svg'
import WomanInProfile from '../../../assets/profilePageImages/woman-in-profile.svg'
import styles from './SubHeader.module.scss'

const SubHeader = () => {
  const user = 'Sheela'

  return (
    <div className={styles.SubHeader}>
      <div className={styles.GreetingDiv}>
        <span className={styles.WelcomeText}>Welcome{user}!</span>
        <span className={styles.InformationText}>
          Check What's up with Your Schedule...
        </span>
      </div>
      <img
        className={styles.WomanInProfile}
        src={WomanInProfile}
        alt="woman in profile"
      />
    </div>
  )
}

export default SubHeader