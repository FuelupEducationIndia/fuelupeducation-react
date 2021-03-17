import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App/App'

import './index.scss'
<<<<<<< HEAD
import Course from './pages/Course/Course'
import Landing from './pages/Landing/Landing'
=======
>>>>>>> 5d7d154e6b058f4087f985c2f182d89b3a656618

const title = 'React with Webpack and Babel'

ReactDOM.render(
  <BrowserRouter>
    <App title={title} />
  </BrowserRouter>,

  document.getElementById('app'),
)

module.hot.accept()
