/* eslint-disable import/no-unresolved */
import React from 'react'
import groupIcon from 'assets/images/group-large.png'
import arrowUpIcon from 'assets/images/arrow-up.png'
import styles from './FileBox.module.scss'
import Item from './Item/Item'
import { files, links } from './mockData'

export default () => (
  <div className={styles.FileBox}>
    <img src={groupIcon} alt="Group" />
    <div className={styles.GroupName}>General</div>
    <div className={styles.SharedFiles}>
      <div className={styles.Heading}>
        <div>Shared files</div>
        <img src={arrowUpIcon} alt="ArrowUp" />
      </div>
      {files.map((file, index) => (
        <Item key={index} detail={file} />
      ))}
    </div>
    <div className={styles.Line} />
    <div className={styles.SharedFiles}>
      <div className={styles.Heading}>
        <div>Shared links</div>
        <img src={arrowUpIcon} alt="ArrowUp" />
      </div>
      {links.map((link, index) => (
        <Item key={index} detail={link} />
      ))}
    </div>
  </div>
)
