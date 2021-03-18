import React from 'react'
import Girl from 'assets/images/Girl.png'
import stlyes from './Report.module.scss'
import { Form } from './Form'

export const Report = () => {
  return (
    <div className={stlyes.Prob_Report}>
      <h5 className={stlyes.Technical_Problem_Report}>
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
