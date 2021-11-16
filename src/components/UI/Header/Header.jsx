import React from 'react'
import styles from './Header.module.scss'
import { ArrowDownIcon, LogoIcon } from '../../icons'
import bell from './assets/Icon material-add-alert.png'
import settings from './assets/Icon feather-settings.png'
import userPhoto from './assets/Ellipse 32.png'

import Logo from './assets/logo.png'

const Header = () => {
  return (
    <div className={styles.Header}>
      <img src={Logo} alt="Logo" className={styles.Header_LogoSvgIcon} />
      <div className={styles.Header_middleContainer}>
        <nav>Dashboard</nav>
        <nav>
          Courses
          <ArrowDownIcon className={styles.Header_arrow} />
        </nav>
        <nav>Schedule</nav>
        <nav>Study groups</nav>
        <nav>Tickets</nav>
        <nav>
          Profile
          <ArrowDownIcon className={styles.Header_arrow} />
        </nav>
      </div>
      <div className={styles.Header_iconsContainer}>
        <img src={bell} alt="bell" />
        <img src={settings} alt="settings" />
        <img src={userPhoto} alt="user" />
      </div>
    </div>
  )
}

export default Header
