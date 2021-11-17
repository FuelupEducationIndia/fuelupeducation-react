import React from 'react'
import styles from './Teacher.scss'
import Welcome from '../../components/UI/Welcome/Welcome'
import NavBar from '../Landing/components/NavBar/NavBar'
import SubNavBar from './components/SubNavBar/SubNavBar'
import ActiveTabRout from './components/ActiveTabRout/ActiveTabRout'

const Teacher = () => {
  return (
    <div className={styles.MyCourses}>
      <NavBar isAuth />
      <Welcome />
      <SubNavBar />
      <ActiveTabRout />
    </div>
  )
}

export default Teacher
