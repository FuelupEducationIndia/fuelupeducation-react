/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import React from 'react'
import styles from './History.module.scss'
import head from './mockData'
import deleteIcon from '../../../../../components/icons/icons-svg/delete.svg'

function History() {
  const Priorities={
    Low :"Low",
    Medium:"Medium",
    High:"High"
  };
  const Status={
    Pending :"Pending",
    Solved:"Solved",
    
  };
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
          {head.map(item => {
            return (
              <div className={styles.Detail}>
                <h2 className={styles.Instructor}>{item.Instructor}</h2>
                <h2 className={styles.IssueTitle}>{item.IssueTitle}</h2>
                {item.Priority === Priorities.Low ? (
                  <h2
                    className={styles.PriorityLow}
                  >
                    {item.Priority}
                  </h2>
                ) : item.Priority === Priorities.High ? (
                  <h2
                    className={styles.PriorityHigh}
                  >
                    {item.Priority}
                  </h2>
                ) : (
                  <h2
                    className={styles.PriorityMedium}
                  >
                    {item.Priority}
                  </h2>
                )}
                <h2 className={styles.Description}>{item.Description}</h2>
                {item.status === Status.Pending ? (
                  <h2 className={styles.StatusP}>
                    {' '}
                    {item.status}
                  </h2>
                ) : (
                  <h2 className={styles.StatusS}>
                    {' '}
                    {item.status}
                  </h2>
                )}
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
