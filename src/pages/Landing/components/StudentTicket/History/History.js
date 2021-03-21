import React, { useState } from 'react'
import attachment from 'assets/images/attachment.png'
import styles from './History.module.scss'
import head from './mockData'
import deleteIcon from '../../../../../components/icons/icons-svg/delete.svg'

export const History = () => {
  return (
    <div className={styles.History}>
      <h4 className={styles.History_Text}>Report History</h4>

      <div className={styles.History_Table}>
        <div className={styles.Header}>
          <h2 className={styles.Instructor}>Instructor</h2>
          <h2 className={styles.Issue_Title}>Issue Title</h2>
          <h2 className={styles.Priority}>Priority</h2>
          <h2 className={styles.Description}>Description</h2>
          <h2 className={styles.Status}>Status</h2>
        </div>

        {head.map(item => {
          return (
            <div className={styles.Detail}>
              <h2 className={styles.Instructor}>{item.Instructor}</h2>
              <h2 className={styles.Issue_Title}>{item.IssueTitle}</h2>
              {item.Priority == 'Low' ? (
                <h2
                  className={styles.Priority}
                  style={{
                    color: '#ffc95f',
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}
                >
                  {item.Priority}
                </h2>
              ) : item.Priority == 'High' ? (
                <h2
                  className={styles.Priority}
                  style={{
                    color: '#ef271b',
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}
                >
                  {item.Priority}
                </h2>
              ) : (
                <h2
                  className={styles.Priority}
                  style={{
                    color: '#64aad9',
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}
                >
                  {item.Priority}
                </h2>
              )}
              <h2 className={styles.Description}>{item.Description}</h2>
              {item.status == 'Pending' ? (
                <h2 className={styles.Status} style={{ color: '#f16600' }}>
                  {' '}
                  {item.status}
                </h2>
              ) : (
                <h2 className={styles.Status} style={{ color: '#2da231' }}>
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
  )
}
