import React from 'react'
import styles from './MyCourses.module.scss'
import Header from '../../components/UI/Header/Header'
import Welcome from '../../components/UI/Welcome/Welcome'
import NavBar from './components/NavBar/NavBar'

const MyCourses = () => {
  return (
    <div className={styles.MyCourses}>
      <Header />
      <Welcome />
      <NavBar />
    </div>
  )
}

export default MyCourses
