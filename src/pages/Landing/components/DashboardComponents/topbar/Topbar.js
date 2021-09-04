/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react'
import './topbar.scss'
import {
  MdAddAlert,
  MdSettings,
  MdAccountCircle,
  MdMenu,
  MdClose,
  MdKeyboardArrowDown,
} from 'react-icons/md'

import Logo from '../../../images/fuelup.jpg'

export default function Topbar() {
  const [istablet, setTablet] = useState(false)

  return (
    <div className="topbar">
      <div className="logo">
        <img className="compLogo" src={Logo} alt="" />
        {istablet ? (
          <MdClose className="closeBtn" onClick={() => setTablet(false)} />
        ) : (
          <MdMenu className="menuBtn" onClick={() => setTablet(true)} />
        )}
      </div>

      <div className={istablet ? 'topbarItemstab' : 'topbarItems'}>
        <ul className="topbarList">
          <li className="topbarListItem">
            <a href="">Dashboard</a>
          </li>
          <li className="topbarListItem">
            <a href="">Courses</a>
            <MdKeyboardArrowDown className="downIcon" />
          </li>
          <li className="topbarListItem">
            <a href="">Schedule</a>
          </li>
          <li className="topbarListItem">
            <a href="">Study Groups</a>
          </li>
          <li className="topbarListItem">
            <a href="">Tickets</a>
            <MdKeyboardArrowDown className="downIcon" />
          </li>
          <li className="topbarListItem">
            <a href="">Profile</a>
          </li>
        </ul>

        <div className="topbarProfileItems">
          <ul className="profileList">
            <li className="topbarIcons">
              <MdAddAlert />
            </li>
            <li className="topbarIcons">
              <MdSettings />
            </li>
            <li className="topbarIcons">
              <MdAccountCircle />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
