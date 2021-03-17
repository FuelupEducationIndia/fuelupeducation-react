import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App/App'

import './index.scss'
<<<<<<< HEAD
<<<<<<< HEAD
import Course from './pages/Course/Course'
import Landing from './pages/Landing/Landing'
=======
>>>>>>> 5d7d154e6b058f4087f985c2f182d89b3a656618
=======
=======
import Course from './pages/Course/Course'
import Landing from './pages/Landing/Landing'
>>>>>>> a0cb0a32699eecd1bdcecb8bf164e5f537c51120
>>>>>>> a316e1ceae96eb2a200dcd7c24180b9ed6bdc70b

const title = 'React with Webpack and Babel'

ReactDOM.render(
  <BrowserRouter>
    <App title={title} />
  </BrowserRouter>,

  document.getElementById('app'),
)

module.hot.accept()
