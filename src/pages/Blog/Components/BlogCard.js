/* eslint-disable prettier/prettier */
import React from 'react'
import styles from './blogCard.module.scss'
import cardImage from '../../Landing/images/group-2037@2x.png'

const BlogCard = () => {
  return (
    <>
      <div className={styles.blogCard}>
        <img alt="dshgfhjsd" src={cardImage} className={styles.blogCardImage} />
        <h4>Mobile Prototyping</h4>

        <h1>Key to Create More Time</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div>
          {/* <img  /> */}
          <h5>Created By Sara Williams</h5>
          <span>March 5,2022 4 min read</span>
        </div>
      </div>
    </>
  )
}

export default BlogCard
