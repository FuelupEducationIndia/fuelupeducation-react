import React from 'react'

import styles from './Hero.module.scss'
import Login from '../Login/Login'

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <Login />
      <div className={styles.HeroMainHeading}>
        An education product like no other
      </div>
      <div className={styles.HeroSecondaryHeading}>
        and thats what we call a Digital Ecosystem
      </div>
    </div>
  )
}

export default Hero
