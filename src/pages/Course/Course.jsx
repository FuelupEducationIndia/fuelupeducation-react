/* eslint-disable import/no-cycle */
import React from 'react'

import NavBar from '../Landing/components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

import styles from './Course.module.scss'
import Body from './components/Body/Body'
import TabNav from './components/TabNav/TabNav'

const Course = props => {
  return (
    <div className={styles.Landing}>
      <NavBar isAuth={false} />
      <Body />
      <TabNav />
    </div>
  )
}

Course.propTypes = {}

export default Course
