import React from 'react'

import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <nav>Browse courses</nav>
      <nav>My courses</nav>
      <nav>Lectures</nav>
      <nav>Exams</nav>
      <nav>Assignments</nav>
      <nav>Attendance</nav>
      <nav>Certificate</nav>
    </div>
  )
}

export default NavBar
