import React, { Component } from 'react'
import Header from './components/DashboardComponents/header/Header'
import Topbar from './components/DashboardComponents/topbar/Topbar'
import Info from './components/DashboardComponents/info/Info'
import Main from './components/DashboardComponents/main/Main'

function TeacherDashboard() {
  return (
    <div className="teacher-dashboard">
      <Topbar />
      <Header />
      <Info />
      <Main />
    </div>
  )
}

export default TeacherDashboard
