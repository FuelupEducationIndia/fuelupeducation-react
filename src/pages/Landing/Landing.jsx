import React from 'react'
import NavBar from './components/NavBar/NavBar'
import styles from './Landing.module.scss'
import StudentTicket from './components/StudentTicket/StudentTicket'
import Body from './components/Body/Body'

const Landing = props => {
  return (
    <div className={styles.Landing}>
      <NavBar isAuth={false} />
      <StudentTicket />
      {/* <Body /> */}
    </div>
  )
}

Landing.propTypes = {}

export default Landing
