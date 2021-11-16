import React from 'react'

import userPhoto from '../../DevelopImages/Ellipse 32.png'

import styles from './ThisWeek.module.scss'

const ThisWeek = () => {
  return (
    <div className={styles.ThisWeek}>
      <div className={styles.ThisWeek_user}>
        <img src={userPhoto} alt="user-img" />
        <span>Jay Pepeira</span>
      </div>
      <span className={styles.ThisWeek_ThisWeek}>This Week you have...</span>
      <div className={styles.blocksContainer}>
        <div className={styles.block}>
          <span className={styles.block_span}>
            Classes <br />
            Sheduled
          </span>
          <div>16</div>
        </div>
        <div className={styles.yellow}>
          <span className={styles.block_span}>
            Exams <br />
            Sheduled
          </span>
          <div>22</div>
        </div>
        <div className={styles.green}>
          <span className={styles.block_span}>
            Courses in <br />
            Progress
          </span>
          <div>20</div>
        </div>
        <div className={styles.white}>
          <span className={styles.block_span}>
            Forum <br />
            Discussions
          </span>
          <div>10</div>
        </div>
      </div>
    </div>
  )
}

export default ThisWeek
