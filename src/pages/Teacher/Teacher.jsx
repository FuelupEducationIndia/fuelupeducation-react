import React, { useState } from 'react'

import style from './Teacher.module.scss'
import Assignment from './Body/createAssignment/CreateAssignment'
import NavBar from '../Landing/components/NavBar/NavBar'
import WelcomeTeacher from '../Teacher/Body/WelcomeTeacher/WelcomeTeacher'
import NavTeacher from '../Teacher/Body/NavTeacher/NavTeacher'
import Summary from '../Teacher/Body/Summary/Summary'
const LandingTeacher = props => {
  var auth = {
    name: 'shaeela',
  }
  return (
    <div className={style.padding}>
      <NavBar />
      <WelcomeTeacher auth={auth} />
      <NavTeacher />
      <Summary />
    </div>
  )
}

LandingTeacher.propTypes = {}

export default LandingTeacher
