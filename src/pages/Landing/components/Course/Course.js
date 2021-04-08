import React from 'react'
import PropTypes from 'prop-types'

import styles from './Course.module.scss'
import Button from '../../../../components/UI/Button/Button'

const Course = ({ className, header, paragraph }) => {
  return (
    <div className={styles[className]}>
      <h1>{header}</h1>
      <p>{paragraph}</p>
      <Button
        typeBtn="button"
        className="ButtonStartLearning"
        text="Start Learning"
      />
    </div>
  )
}

Course.propTypes = {
  className: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
}

export default Course
