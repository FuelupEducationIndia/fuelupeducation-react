import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CreateAssignment from '../CreateAssignment/createAssignment'
import ReviewAssignment from '../ReviewAssignment/ReviewAssignment'
import style from './Assignment.module.scss'

const Assignment = () => {
  const [createAss, setcreateAss] = useState('Create')
  const onChange = e => {
    setcreateAss(e.currentTarget.value)
  }
  return (
    <div className={style.formCheckCont}>
      <div className={style.formCheck}>
        <input
          className={style.formCheckInput}
          type="radio"
          name="assignments"
          id="flexRadio1"
          onChange={onChange}
          value="Create"
          checked={createAss === 'Create'}
        />
        <label htmlFor="flexRadio1">Create Assignments</label>
      </div>
      <div className={style.formCheck}>
        <input
          className={style.formCheckInput}
          type="radio"
          name="assignments"
          id="flexRadio2"
          onChange={onChange}
          value="Review"
          checked={createAss === 'Review'}
        />
        <label htmlFor="flexRadio2">Review Assignments</label>
      </div>
      <div className={style.formCheck}>
        <input
          className={style.formCheckInput}
          type="radio"
          name="assignments"
          id="flexRadio3"
          onChange={onChange}
          value="Grading"
          checked={createAss === 'Grading'}
        />
        <label htmlFor="flexRadio3">Grading</label>
      </div>

      {createAss === 'Create' ? <CreateAssignment /> : ''}
      {createAss === 'Review' ? <ReviewAssignment /> : ''}
    </div>
  )
}

Assignment.propTypes = {}

export default Assignment
