/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import React from 'react'
import deleteIcon from 'components/icons/icons-svg/delete.svg'
import styles from './History.module.scss'
import reportHistories from './mockData'
import Priorities from './enums'
import Status from './status'

function History() {


   // eslint-disable-next-line consistent-return
   function getColor(priority) {

    console.log("Low", Priorities.Low)
    if (priority === 'Low') {
      return "#ffc95f"
    }
    console.log("High", Priorities.High)
    if (priority === Priorities.High) {
      return "#ef271b"
    }
    if (priority === Priorities.Medium) {
      return "#64aad9"
    }
  }
  // eslint-disable-next-line consistent-return
  function getColr(status) {
    if (status === Status.Pending) {
      return "#f16600"
    }
    if (status === Status.Solved) {
      return "#2da231"
    }

  }
  return (
    <div className={styles.History}>
      <h4 className={styles.HistoryText}>Report History</h4>

      <div className={styles.HistoryTable}>
        <div className={styles.Header}>
          <h2 className={styles.Instructor}>Instructor</h2>
          <h2 className={styles.IssueTitle}>Issue Title</h2>
          <h2 className={styles.Priority}>Priority</h2>
          <h2 className={styles.Description}>Description</h2>
          <h2 className={styles.Status}>Status</h2>
        </div>
        <div className={styles.DetailTable}>
          {reportHistories.map(item => {
            return (
              <div className={styles.Detail}>
                <h2 className={styles.Instructor}>{item.instructor}</h2>
                <h2 className={styles.IssueTitle}>{item.issueTitle}</h2>
              
                <h2
                  className={styles.priority} 
                  style={{'color': getColor(item.priority)}}
                > 
                  {item.priority}
                </h2>
                  
               
                <h2 className={styles.Description}>{item.description}</h2>
                <h2
                  className={styles.status}
                  style={{'color': getColr(item.status)}}
                >
                  {' '}
                  {item.status}
                </h2>
              
                <img className={styles.Delete} src={deleteIcon} alt="delete" />
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}
export default History
