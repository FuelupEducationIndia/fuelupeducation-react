import React from 'react'
import styles from './Block.module.scss'
import Button from '../../../../../components/UI/Button/Button'

// eslint-disable-next-line react/prop-types
const Block = ({ data }) => {
  return (
    <div className={styles.Block}>
      {/* eslint-disable-next-line react/prop-types */}
      <img src={data.img} alt="block-img" />
      <div className={styles.Block_contentContainer}>
        {/* eslint-disable-next-line react/prop-types */}
        <h1>{data.title}</h1>
        {/* eslint-disable-next-line react/prop-types */}
        <span className={styles.Block_content}>{data.content}</span>
        <div className={styles.Block_authorContainer}>
          {/* eslint-disable-next-line react/prop-types */}
          <img src={data.author.authorImg} alt="author-img" />
          <div>
            <span className={styles.Block_createdBy}>
              Created by 
{' '}
{/* eslint-disable-next-line react/prop-types */}
              {data.author.name}
            </span>
            <span className={styles.Block_createdOn}>
              Created on 
{' '}
{/* eslint-disable-next-line react/prop-types */}
              {data.createdData}
            </span>
          </div>
        </div>
        <Button typeBtn="button" text="View" className="ButtonView" />
      </div>
    </div>
  )
}

export default Block
