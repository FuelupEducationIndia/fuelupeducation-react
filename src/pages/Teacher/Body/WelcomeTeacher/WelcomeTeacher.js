import React from 'react'
import PropTypes from 'prop-types'

import WelcomImg from 'assets/images/teacherwelcomeH.png'
import styles from './WelcomeTeacher.module.scss'

const WelcomeTeacher = props => {
  return (
    <div className={styles.welcome}>
      <div className={styles.div50W}>
        <p className={styles.textname}>Welcome {props.auth.name}</p>
        <p className={styles.subtextname}>
          check what is up with your schedule...
        </p>
      </div>
      <img src={WelcomImg} className={styles.welcomeimg} />
    </div>
  )
}

WelcomeTeacher.propTypes = {
  auth: PropTypes.object.isRequired,
}

export default WelcomeTeacher
