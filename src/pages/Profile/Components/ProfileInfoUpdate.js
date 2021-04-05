import React from 'react'
import styles from './ProfileInfoUpdate.module.scss'
import TickMark from '../assets/TickMark.svg'
import close from '../assets/close.svg'

export default () => (
  <div className={styles.CoursesContainer}>
    <div className={styles.CompleteMark}>
      <img src={TickMark} alt="Your imformation is saved" />
    </div>
    <div className={styles.title}>
      <p>Success!</p>
    </div>
    <div className={styles.description}>
      <span>Your profile information was updated</span>
    </div>
    <div className={styles.closeApp}>
      <img src={close} alt="close application" />
    </div>
  </div>
)

/*  <div className={styles.closeApp}>
      <img src={close} alt="close application" />
    </div>
    <div className={styles.completedMark}>
      <img src={complete} alt="attandance complete" />
    </div>
    <p>Take attandance sucessfully</p>
    <div className={styles.bottom}>
      <button className={styles.btn}>Live Lecture</button>
      <h6>Historic Attandance</h6>
    </div>
    
    */
