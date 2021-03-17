import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App/App'

import './index.scss'
<<<<<<< HEAD
=======
import Course from './pages/Course/Course'
import Landing from './pages/Landing/Landing'
>>>>>>> a0cb0a32699eecd1bdcecb8bf164e5f537c51120

const title = 'React with Webpack and Babel'

ReactDOM.render(
  <BrowserRouter>
    <App title={title} />
  </BrowserRouter>,

  document.getElementById('app'),
)

module.hot.accept()
