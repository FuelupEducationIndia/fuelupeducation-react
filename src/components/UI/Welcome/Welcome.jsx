import React from 'react'
import styles from './Welcome.module.scss'

import teacherImg from './assets/Mask Group 69.svg'

const Welcome = () => {
  const username = 'Sheela'
  return (
    <div className={styles.Welcome}>
      <div>
        <h1>
          Welcome
          <span>{username}</span>
          <span>!</span>
        </h1>
        <span>Check What&apos;s up with your Schedule...</span>
      </div>
      <img src={teacherImg} alt="teacher-img" />
    </div>
  )
}

export default Welcome
