import React, { useState } from 'react'
import PropTypes from 'prop-types'

import imglargFile from '../../../../assets/images/filelogo.png'
import styles from './Summary.module.scss'

const Summary = props => {
  console.log(props)
  return (
    <div className={styles.d100}>
      <h2>{props.name} Summary</h2>
      <table className={styles.table}>
        <thead>
          {props.tabledata.map((item, index) => {
            if (index == 0) {
              return (
                <tr key={index}>
                  {Object.keys(item).map((element, i) => {
                    return <th key={i}>{element}</th>
                  })}
                </tr>
              )
            }
          })}
        </thead>
        <tbody>
          {props.tabledata.map((item, index) => {
            return (
              <tr key={index}>
                {Object.entries(item).map((element, i) => {
                  if (element[0] == 'Submissions') {
                    return (
                      <td key={i}>
                        <img className={styles.d10} src={imglargFile} />
                        <span className={styles.d90}>
                          {element[1].substring(0, 35)}
                        </span>
                      </td>
                    )
                  } else if (element[1] == 'Need to improve') {
                    return (
                      <td key={i} className={styles.red}>
                        {element[1].substring(0, 35)}
                      </td>
                    )
                  } else if (element[1] == 'Good') {
                    return (
                      <td key={i} className={styles.green}>
                        {element[1].substring(0, 35)}
                      </td>
                    )
                  } else if (element[1] == 'Pending') {
                    return (
                      <td key={i} className={styles.orange}>
                        {element[1].substring(0, 35)}
                      </td>
                    )
                  } else {
                    return <td key={i}>{element[1].substring(0, 35)}</td>
                  }
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

Summary.propTypes = {
  name: PropTypes.string.isRequired,
  tabledata: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Summary
