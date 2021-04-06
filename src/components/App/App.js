import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, useLocation } from 'react-router-dom'

import styles from './App.module.scss'

// Landing page - for all the same

import LoadingSimple from '../UI/LoadingSimple/LoadingSimple'

// Routes and Layout for public/unauthorized user
import Layout from '../Layouts/PublicLayout'
import Profile from '../../pages/profile/Profile'

const App = ({ title }) => {
  // Get current location. if it's homepage =>  rendering landing
  const location = useLocation()

  let layoutToDisplay = ''

  if (location.pathname === '/') {
    layoutToDisplay = <Layout />
  } else if (location.pathname === '/profile') {
    layoutToDisplay = <Profile />
  }
  return <div className={styles.Container}>{layoutToDisplay}</div>
}

App.propTypes = {
  title: PropTypes.string.isRequired,
}

export default App
