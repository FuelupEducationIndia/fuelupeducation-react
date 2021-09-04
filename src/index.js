import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App/App'

import './index.scss'
import TeacherDashboard from './pages/Landing/TeacherDashboard'

const title = 'React with Webpack and Babel'

ReactDOM.render(
  <BrowserRouter>
    <App title={title} />
    <TeacherDashboard />
  </BrowserRouter>,

  document.getElementById('app'),
)

module.hot.accept()
