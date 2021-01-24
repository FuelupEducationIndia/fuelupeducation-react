import React from 'react'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

import styles from './Landing.module.scss'
import Hero from './components/Hero/Hero'

const Landing = props => {
  return (
    <>
      <div className={styles.Landing}>
        <NavBar isAuth={false} />
        <Hero />
        <div className={styles.backgroundImage} />
        <div className={styles.backgroundImage2} />
      </div>
      <Footer />
    </>
  )
}

Landing.propTypes = {}

export default Landing
