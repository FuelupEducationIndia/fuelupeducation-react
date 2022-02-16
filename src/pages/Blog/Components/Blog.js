/* eslint-disable prettier/prettier */
import React from 'react'
import NavBar from '../../Landing/components/NavBar/NavBar'
import SimpleSwiper from '../../Landing/components/Sliders/Sliders'
import styles from '../../Landing/Landing.module.scss'
import style from './blogCard.module.scss'
import BlogCard from './BlogCard'
import Footer from '../../Landing/components/Footer/Footer'

const Blog = () => {
  return (
    <div style={{ height: '100vh' }}>
      <NavBar isAuth={false} />
      <div className={styles.Landing}>
        <SimpleSwiper />
      </div>
      <h2 className={style.heading}>Collaborative Prototyping</h2>
      <div className={style.blogCards}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className={style.blogCards}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className={style.blogCards}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <Footer />
    </div>
  )
}

export default Blog
