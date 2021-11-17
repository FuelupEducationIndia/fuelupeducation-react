import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import styles from './SubNavBar.module.scss'

import { activeTab } from '../../../../store/actions'

const SubNavBar = () => {
  const activeTabResult = useSelector(elem => elem.activeTab)

  const dispatch = useDispatch()

  return (
    <div className={styles.NavBar}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <nav
        className={`${
          activeTabResult === 0 ? styles.NavBar_active : styles.NavBar_default
        }`}
        onClick={() => dispatch(activeTab.setActiveTab(0))}>
        Browse courses
      </nav>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <nav
        className={`${
          activeTabResult === 1 ? styles.NavBar_active : styles.NavBar_default
        }`}
        onClick={() => dispatch(activeTab.setActiveTab(1))}>
        My courses
      </nav>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <nav
        className={`${
          activeTabResult === 2 ? styles.NavBar_active : styles.NavBar_default
        }`}
        onClick={() => dispatch(activeTab.setActiveTab(2))}>
        Lectures
      </nav>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <nav
        className={`${
          activeTabResult === 3 ? styles.NavBar_active : styles.NavBar_default
        }`}
        onClick={() => dispatch(activeTab.setActiveTab(3))}>
        Exams
      </nav>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <nav
        className={`${
          activeTabResult === 4 ? styles.NavBar_active : styles.NavBar_default
        }`}
        onClick={() => dispatch(activeTab.setActiveTab(4))}>
        Assignments
      </nav>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <nav
        className={`${
          activeTabResult === 5 ? styles.NavBar_active : styles.NavBar_default
        }`}
        onClick={() => dispatch(activeTab.setActiveTab(5))}>
        Attendance
      </nav>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <nav
        className={`${
          activeTabResult === 6 ? styles.NavBar_active : styles.NavBar_default
        }`}
        onClick={() => dispatch(activeTab.setActiveTab(6))}>
        Certificate
      </nav>
    </div>
  )
}

export default SubNavBar
