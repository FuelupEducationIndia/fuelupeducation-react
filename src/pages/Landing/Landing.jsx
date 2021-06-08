import React from 'react'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

import styles from './Landing.module.scss'
import Body from './components/Body/Body'
import Teacher from '../Teacher/Teacher'
const Landing = props => {
  return (
    <div className={styles.Landing}>
      <NavBar isAuth={false} />
      <Body />
    </div>
  )
}

Landing.propTypes = {}

export default Landing
