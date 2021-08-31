import React from 'react';
import PropTypes from 'prop-types';

import imglargFile from '../../../../assets/images/filelogo.png';
import {ReactComponent as ArrowLeft } from '../../../../assets/svgs/arrow-left.svg';
import {ReactComponent as ArrowRight } from '../../../../assets/svgs/arrow-right.svg';

import styles from './TabulatedGrades.module.scss';

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
                    <td key={i} className={`
                      ${element[0] == 'Status' ? (
                        element[1] == 'Approved' ? styles.green : 
                        element[1] == 'Pending' ? styles.orange : 
                        element[1] == 'Failed' ? styles.red : ''
                      ) : (
                        element[0] == 'Submissions' ? styles.submissions : ''
                      )}
                    `}>
                        {element[0] === 'Submissions' && (
                          <img src={imglargFile} />
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
                  <ArrowLeft />
                  <span>Previous</span>
                </div>
              </td>
              <td>
                <div className={styles.orange}> 
                  <span>Next</span>
                  <ArrowRight className={styles.orange}/>
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