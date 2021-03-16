import React from 'react'

import styles from './Body.module.scss'
import ChatBox from './ChatBox/ChatBox'
import FileBox from './FileBox/FileBox'
import LeftBox from './LeftBox/LeftBox'

const Body = () => {
  return (
    <div className={styles.Body}>
      <LeftBox />
      <ChatBox />
      <FileBox />
    </div>
  )
}

export default Body
