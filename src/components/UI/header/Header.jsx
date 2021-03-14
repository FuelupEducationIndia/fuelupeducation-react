import React from 'react'

import styles from './Header.module.scss'
import NavHeader from '../nav-header/NavHeader'
import SubHeader from '../sub-header/SubHeader'

const Header = () => {
  return (
    <div className={styles.HeaderDiv}>
      <NavHeader />
      <SubHeader />
    </div>
  )
}

export default Header
