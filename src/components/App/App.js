/* eslint-disable prettier/prettier */
import React, { Suspense, useState } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, useLocation } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '../../store/store'

import styles from './App.module.scss'

// Landing page - for all the same

import LoadingSimple from '../UI/LoadingSimple/LoadingSimple'

// Routes and Layout for public/unauthorized user
import Layout from '../Layouts/PublicLayout'
// import student from '../../FuelUpEducation student-side/src/App'

const App = ({ title }) => {
  // Get current location. if it's homepage =>  rendering landing
  const location = useLocation()
  const [role, setRole] = useState(true)
  let layoutToDisplay = ''

  layoutToDisplay = role === true ? <Layout /> : <h1> I am ermias</h1>

  return (
    <Provider store={store}>
      <div className={styles.Container}>{layoutToDisplay}</div>
    </Provider>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired,
}

export default App
