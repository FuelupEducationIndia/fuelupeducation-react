/* eslint-disable prettier/prettier */
import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, useLocation } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '../../store/store'

import styles from './App.module.scss'

// Landing page - for all the same

import LoadingSimple from '../UI/LoadingSimple/LoadingSimple'

// Routes and Layout for public/unauthorized user
import Layout from '../Layouts/PublicLayout'

const App = ({ title }) => {
  // Get current location. if it's homepage =>  rendering landing
  const location = useLocation()

  let layoutToDisplay = ''

  layoutToDisplay = <Layout />

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
