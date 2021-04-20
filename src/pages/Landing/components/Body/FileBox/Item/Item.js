/* eslint-disable import/no-unresolved */
import React from 'react'
import fileIcon from 'assets/images/file-large.png'
import linkIcon from 'assets/images/link.png'
import PropTypes from 'prop-types'
import styles from './Item.module.scss'

const Item = ({ detail }) => (
  <div className={styles.FileItem}>
    <div className={styles.ImageBox}>
      <img src={detail.isFile ? fileIcon : linkIcon} alt="Icon" />
    </div>
    <div className={styles.FileItemDetails}>
      <div>{detail.name}</div>
      <div>
        <span>{detail.date}</span>
        <span>{detail.size}</span>
      </div>
    </div>
  </div>
)

Item.propTypes = {
  detail: PropTypes.shape({
    isFile: PropTypes.bool,
    name: PropTypes.string,
    date: PropTypes.string,
    size: PropTypes.string,
  }).isRequired,
}

export default Item
