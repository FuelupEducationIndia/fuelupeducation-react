import React from 'react'
import Forms from './Forms'

import styles from './Show.module.scss'

const Showcase = () => {
  return (
    <div>
      <p className={styles.Show}> Maths Assignment-1</p>
      <p className={styles.Showline} />
      <div className={styles.ShowDiv}>
        <div className={styles.ShowDivIn}>
          <h3 className={styles.Showh1}>Overview</h3>
          <p className={styles.Showp}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation
          </p>
          <h3 className={styles.Showh1}>Note</h3>
          <p className={styles.Showp}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation
          </p>
          <h3 className={styles.Showh1}>Deliverable</h3>
          <p className={styles.Showp}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation
          </p>
        </div>
        <div className={styles.ShowForms}>
          <Forms />
        </div>
      </div>
    </div>
  )
}

export default Showcase
