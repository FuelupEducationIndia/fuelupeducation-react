import './upcoming.scss'
import { FaRegCalendar } from 'react-icons/fa'
import React from 'react'
import Event from './Event'

export default function Upcoming() {
  return (
    <div className="upcoming">
      <h2>UPCOMING EVENTS</h2>
      <hr />
      <div className="date-cont">
        <FaRegCalendar />
        <p>{`${new Date().toDateString()}`}</p>
      </div>
      <Event />
      <Event />
      <Event />
    </div>
  )
}
