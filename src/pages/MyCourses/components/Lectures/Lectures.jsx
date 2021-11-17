import React from 'react'
import styles from './Lectures.module.scss'

const Lectures = () => {
  return (
    <div className={styles.Lectures}>
      <div className={styles.Lectures_insideContainer}>
        <div>
          <span>
            Board/ University
            <input placeholder="Rajasthan board " />
          </span>
        </div>

        <div>
          <span>
            Course
            <input placeholder="SS2021- The Solar System" />
          </span>
        </div>

        <div>
          <span>
            Your Name
            <input placeholder="Instructors Name" />
          </span>
        </div>

        <div>
          <span>
            Student/Group
            <input placeholder="Student/Group Name" />
          </span>
        </div>

        <div>
          <span>
            Lecture Title
            <input placeholder="Type title here" />
          </span>
        </div>

        <div>
          <span>
            Description
            <input placeholder="Instructors Name" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Lectures
