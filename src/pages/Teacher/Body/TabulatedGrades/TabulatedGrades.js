import React from 'react'
import PropTypes from 'prop-types'

import imglargFile from '../../../../assets/images/filelogo.png'
import arrowLeft from '../../../../assets/images/arrow-left.png'
import arrowRight from '../../../../assets/images/arrow-right.png'

import styles from './TabulatedGrades.module.scss'

const TabulatedGrades = props => {
  return (
    <div className={styles.d100}>
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
                  return (
                    <td key={i} className={`${element[0] == 'Status' && (
                      element[1] == 'Approved' ? styles.green : 
                      element[1] == 'Pending' ? styles.orange : 
                      element[1] == 'Failed' ? styles.red : ''
                      )}`}
                    >
                        {element[0] === 'Submissions' && (
                          <img className={styles.d10} src={imglargFile} />
                        )}
                          {element[1]}
                    </td>
                  )
                })}
              </tr>
            )
          })}

        </tbody>
        <tfoot>
          <tr> 
              <td></td><td></td><td></td><td></td><td></td>
              <td>
                <div> 
                  <img src={arrowLeft}/>
                  <span>Previous</span>
                </div>
              </td>
              <td>
                <div> 
                  Next
                  <img src={arrowRight} />
                </div>
              </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
};

TabulatedGrades.propTypes = {
  name: PropTypes.string.isRequired,
  tabledata: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TabulatedGrades;