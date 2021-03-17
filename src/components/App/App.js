import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, useLocation } from 'react-router-dom'

import styles from './App.module.scss'

// Landing page - for all the same

import LoadingSimple from '../UI/LoadingSimple/LoadingSimple'

// Routes and Layout for public/unauthorized user
import Layout from '../Layouts/PublicLayout'

const App = ({ title }) => {
  // Get current location. if it's homepage =>  rendering landing
  const location = useLocation()

  let layoutToDisplay = ''

  if (location.pathname === '/') {
    layoutToDisplay = <Layout />
<<<<<<< HEAD
<<<<<<< HEAD
  } else {
    layoutToDisplay = <Layout />
=======
>>>>>>> 5d7d154e6b058f4087f985c2f182d89b3a656618
=======
=======
  } else {
    layoutToDisplay = <Layout />
>>>>>>> a0cb0a32699eecd1bdcecb8bf164e5f537c51120
>>>>>>> a316e1ceae96eb2a200dcd7c24180b9ed6bdc70b
  }
  return <div className={styles.Container}>{layoutToDisplay}</div>
}

App.propTypes = {
  title: PropTypes.string.isRequired,
}

export default App
