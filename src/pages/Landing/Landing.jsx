import React from 'react'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

import styles from './Landing.module.scss'
import Body from './components/Body/Body'
import Showcase from './components/showcase/Showcase'

const Landing = props => {
  return (
    <div className={styles.Landing}>
      <NavBar isAuth={false} />
      <Body />
      <Showcase />
    </div>
  )
}

Landing.propTypes = {}

export default Landing
