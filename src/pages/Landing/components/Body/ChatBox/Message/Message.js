/* eslint-disable import/no-unresolved */
import React from 'react'
import fileIcon from 'assets/images/file.png'
import moreIcon from 'assets/images/more-horizontal.png'
import PropTypes from 'prop-types'
import styles from './Message.module.scss'

const Message = ({ message: { file, avatar, name, lastAccess, text } }) => (
  <div className={styles.Message}>
    <img src={avatar} alt="Avatar" />
    <div>
      <div className={styles.Heading}>
        <div>{name}</div>
        <div className={styles.HeadingDot} />
        <span>{lastAccess}</span>
      </div>
      <div className={styles.Content}>
        {text && <div>{text}</div>}
        {file && (
          <div className={styles.Row}>
            <div className={styles.FileBox}>
              <div>
                <img src={fileIcon} alt="File" />
              </div>
              <div>
                <div className={styles.FileName}>{file.fileName}</div>
                <div className={styles.FileSize}>{file.fileSize}</div>
              </div>
            </div>
            <img src={moreIcon} alt="more" />
          </div>
        )}
      </div>
    </div>
  </div>
)

Message.propTypes = {
  message: PropTypes.shape({
    file: PropTypes.shape({
      fileName: PropTypes.string,
      fileSize: PropTypes.string,
    }),
    avatar: PropTypes.number,
    name: PropTypes.string,
    lastAccess: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
}

export default Message
