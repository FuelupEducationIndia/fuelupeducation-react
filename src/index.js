import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App/App'

import './index.scss'
import Course from './pages/Course/Course'
import Landing from './pages/Landing/Landing'

const title = 'React with Webpack and Babel'

ReactDOM.render(
  <BrowserRouter>
    <App title={title} />
  </BrowserRouter>,

  document.getElementById('app'),
)

module.hot.accept()
