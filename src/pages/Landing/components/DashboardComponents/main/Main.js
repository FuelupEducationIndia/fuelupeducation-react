import React from 'react'
import Discussion from './Discussion'
import MiddleContent from './MiddleContent'
import './main.scss'
import Upcoming from './Upcoming'

function Main() {
  return (
    <div className="main">
      <Discussion />
      <MiddleContent />
      <Upcoming />
    </div>
  )
}

export default Main
