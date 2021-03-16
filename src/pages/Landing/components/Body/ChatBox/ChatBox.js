/* eslint-disable import/no-unresolved */
import React from 'react'
import emilyIcon from 'assets/images/emily.png'
import groupIcon from 'assets/images/group.png'
import emmyIcon from 'assets/images/avatar.png'
import styles from './ChatBox.module.scss'
import Message from './Message/Message'
import Input from './Input/Input'

const messages2 = [
  {
    name: 'Emily Smith',
    lastAccess: '3 days ago',
    avatar: emmyIcon,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus.',
  },
  {
    name: 'Emmy Brown',
    lastAccess: '1 hour ago',
    avatar: emmyIcon,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
  },
]

export default ({
  messages = [
    {
      name: 'Emily Smith',
      lastAccess: '2 hour ago',
      avatar: emilyIcon,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
    {
      name: 'Emily Smith',
      lastAccess: '1 hour ago',
      avatar: emilyIcon,
      file: { fileName: 'Style.zip', fileSize: '40.30MB' },
    },
    {
      name: 'Emmy Brown',
      lastAccess: '1 hour ago',
      avatar: emmyIcon,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
  ],
}) => (
  <div className={styles.ChatBox}>
    <div className={styles.Header}>
      <img src={groupIcon} alt="Avatar" />
      <div>General</div>
    </div>
    <div className={styles.Content}>
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      <div className={styles.TimeLine}>
        <div />
        <div>3 days ago</div>
        <div />
      </div>
      {messages2.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
    <Input />
  </div>
)
