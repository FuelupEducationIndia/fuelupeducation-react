import React, { useState } from 'react'

import NavBar from './components/NavBar/NavBar'
// import Footer from './components/Footer/Footer'
import SignIn from '../sign-in/SignIn'

import styles from './Landing.module.scss'
import Hero from './components/Hero/Hero'
import SignUp from '../sign-up/SignUp'

const Landing = props => {
  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  return (
    <div className={styles.LandingDiv}>
      <div className={styles.Landing}>
        <NavBar
          showSignIn={showSignIn}
          setShowSignIn={setShowSignIn}
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
          isAuth={false}
        />
        <Hero />
        <div className={styles.backgroundImage} />
        <div className={styles.backgroundImage2} />
      </div>
      {showSignIn && (
        <SignIn showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      )}
      {showSignUp && (
        <SignUp
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
          showSignIn={showSignIn}
          setShowSignIn={setShowSignIn}
        />
      )}
      {/* <Footer /> */}
    </div>
  )
}

Landing.propTypes = {}

export default Landing
