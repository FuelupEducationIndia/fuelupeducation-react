import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './Summary.module.scss'

const Summary = props => {
  const [viewIn, setViewIn] = useState('')
  var tabledata = [
    {
      Board: 'Rajasthan',
      Semester: 'Semester 6',
      Courses: 'SS2021-The Solar System',
      Instructors: 'Sarah william',
      Students: 'Student Name',
      Type: 'Group Project',
      Language: 'Hindi',
      Submissions: 'Assignment1.pdf',
      Status: 'Pending',
    },
    {
      Board: 'Rajasthan',
      Semester: 'Semester 6',
      Courses: 'SS2021-The Solar System',
      Instructors: 'Sarah william',
      Students: 'Student Name',
      Type: 'Group Project',
      Language: 'Hindi',
      Submissions: 'Assignment1.pdf',
      Status: 'Approved',
    },
  ]

  return (
    <div>
      <h2>Assignments Summary</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Board/ Uni</th>
            <th>Semester</th>
            <th>Courses</th>
            <th>Instructors</th>
            <th>Students/Groups</th>
            <th>Type</th>
            <th>Language</th>
            <th>submissions</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {tabledata.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.Board}</td>
                <td>{item.Semester}</td>
                <td>{item.Courses}</td>
                <td>{item.Instructors}</td>
                <td>{item.Students}</td>
                <td>{item.Type}</td>
                <td>{item.Language}</td>
                <td>{item.Submissions}</td>
                <td>{item.Status}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

Summary.propTypes = {}

export default Summary
