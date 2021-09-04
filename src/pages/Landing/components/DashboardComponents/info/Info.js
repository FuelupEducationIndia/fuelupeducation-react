import React from 'react'
import EachInfo from './EachInfo'
import './info.scss'

function Info() {
  return (
    <div className="info">
      <div className="info-container">
        <EachInfo title="COURSES" />
        <EachInfo title="EXAMS" />
        <EachInfo title="ASSIGNMENTS" />
      </div>
    </div>
  )
}

export default Info
