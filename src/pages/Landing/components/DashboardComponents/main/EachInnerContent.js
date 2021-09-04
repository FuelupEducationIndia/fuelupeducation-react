import React from 'react'

import { BsBook } from 'react-icons/bs'

function EachInnerContent({ title, time }) {
  return (
    <div className="each-inner-content">
      <div className="each-moreinner-content">
        <BsBook />
        <h4>{title}</h4>
      </div>
      <span>{time}</span>
    </div>
  )
}

export default EachInnerContent
