import React from 'react'
import Block from './Block/Block'
import styles from './BlockContainer.module.scss'

// eslint-disable-next-line react/prop-types
const BlockContainer = ({ data }) => {
  return (
    <div className={styles.BlockContainer}>
      {data.map(elem => (
        <Block data={elem} />
      ))}
    </div>
  )
}

export default BlockContainer
