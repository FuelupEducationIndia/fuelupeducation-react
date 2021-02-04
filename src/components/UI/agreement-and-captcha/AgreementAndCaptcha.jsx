import React from 'react'

import recaptcha from '../../../assets/signIn-signUpImages/recaptcha_logo.png'

import styles from './AgreementAndCaptcha.module.scss'

const AgreementAndCaptcha = () => {
  return (
    <div>
      <div className={styles.CheckBoxDiv}>
        <div className={styles.checkBoxInnerDiv}>
          <input
            type="checkbox"
            id="checkbox"
            className={styles.bigCheckbox}
            required
          />
          <label htmlFor="checkbox" />
        </div>
        <span className={styles.CheckBoxSpan}>
          I have read and agree with the terms and conditions as well as the
          Privacy Policy of Fuelup Education
        </span>
      </div>
      <div className={styles.recaptchaDiv}>
        <div className={styles.recaptchaInnerDiv}>
          <div className={styles.checkBoxInnerDiv}>
            <input
              type="checkbox"
              id="recaptcha"
              className={styles.bigCheckboxR}
              required
            />
            <label htmlFor="recaptcha" />
          </div>
          <span className={styles.CheckBoxSpan}>I'm not a robot</span>
        </div>
        <img src={recaptcha} alt="recaptcha" />
      </div>
    </div>
  )
}

export default AgreementAndCaptcha
