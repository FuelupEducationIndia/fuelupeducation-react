/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import call from '../../../../../assets/images/call.png'
import styles from './Top.module.scss'

const Top = () => {
  //    const Student=[
  //         {id:1,
  //             name:"Sheela"},
  //     ];
  return (
    <div className={styles.TopSection}>
      <div className={styles.Head}>
        <div className={styles.Welcome}>Welcome Sheela!</div>
        <div>
          <img src={call} alt="none" className={styles.TopImg} />
        </div>
      </div>
      <h5>Check What's up with your Schedule...</h5>
    </div>
  )
}
export default Top
