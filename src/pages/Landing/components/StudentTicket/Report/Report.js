import React from 'react'
import Girl from '../../../../../assets/images/Girl.png'
import stlyes from './Report.module.scss'
import Form from './Form'

function Report() {
  return (
    <div className={stlyes.ProbReport}>
      <h5 className={stlyes.TechnicalProblemReport}>
        Technical Problem Report
      </h5>
      <div className={stlyes.Report}>
        <Form />
        <div className={stlyes.ReportImg}>
          <img src={Girl} alt="girl" />
        </div>
      </div>
    </div>
  )
}
export default Report
