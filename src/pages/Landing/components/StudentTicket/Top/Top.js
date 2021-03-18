import React from 'react'
import call from 'assets/images/call.png'
import styles from './Top.module.scss'

export const Top = () => {
  //    const Student=[
  //         {id:1,
  //             name:"Sheela"},
  //     ];
  return (
    <div className={styles.TopSection}>
      <div className={styles.head}>
        <div className={styles.welcome}>Welcome Sheela!</div>
        <div>
          <img src={call} alt="none" className={styles.TopImg} />
        </div>
      </div>
      <h5>Check What's up with your Schedule...</h5>
    </div>
  )
}
