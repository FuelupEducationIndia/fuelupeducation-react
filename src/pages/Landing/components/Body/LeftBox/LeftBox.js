/* eslint-disable import/no-unresolved */
import React from 'react'
import threadsIcon from 'assets/images/threads.png'
import dmsIcon from 'assets/images/dms.png'
import aIcon from 'assets/images/@.png'
import emilyIcon from 'assets/images/emily.png'
import addIcon from 'assets/images/add.png'
import moreIcon from 'assets/images/more.png'
import avatar from 'assets/images/avatar.png'
import styles from './LeftBox.module.scss'

export default () => (
  <div className={styles.LeftBox}>
    <div className={styles.LeftBoxActions}>
      <div className={styles.LeftBoxAction}>
        <div>
          <img src={threadsIcon} alt="Threads" />
        </div>
        Threads
      </div>
      <div className={styles.LeftBoxAction}>
        <div>
          <img src={dmsIcon} alt="DM" />
        </div>
        All DMs
      </div>
      <div className={styles.LeftBoxAction}>
        <div>
          <img src={aIcon} alt="DM" />
        </div>
        Mentions & Reactions
      </div>
      <div className={styles.LeftBoxAction}>
        <div>
          <img src={moreIcon} alt="More" />
        </div>
        More
      </div>
    </div>
    <div className={styles.Line} />
    <div className={styles.LeftBoxTeams}>
      <div className={styles.LeftBoxTeamsHeading}>
        <div>Teams</div>
        <img src={addIcon} alt="Add" />
      </div>
      <div>
        <span>#General</span>
        <span>20</span>
      </div>
      <div>
        <span>#Team</span>
        <span>3</span>
      </div>
    </div>
    <div className={styles.Line} />
    <div className={styles.LeftBoxDM}>
      <div className={styles.LeftBoxDMHeading}>
        <div>Direct Messages</div>
        <img src={addIcon} alt="Add" />
      </div>
      <div>
        <div>
          <img src={emilyIcon} alt="Avatar" />
          <div className={styles.LeftBoxActive} />
        </div>
        <div>Emily Smith</div>
      </div>
      <div>
        <div>
          <img src={avatar} alt="Avatar" />
        </div>
        <div>Emily Smith</div>
      </div>
    </div>
  </div>
)
