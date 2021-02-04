import React from 'react'

import AgreementAndCaptcha from '../../components/UI/agreement-and-captcha/AgreementAndCaptcha'
import Input from '../../components/UI/input/Input'
import SelectDropDown from '../../components/UI/select-dropdown/SelectDropDown'
import Button from '../../components/UI/button/Button'

import styles from './WelcomePage.module.scss'

const WelcomePage = () => {
  return (
    <div>
      <div className={styles.WelcomeHeading}>
        <h1>Welcome!</h1>
        <span>Please help us fill in your basic information</span>
      </div>
      <div className={styles.FieldDiv}>
        <div className={styles.LeftDiv}>
          <Input placeholder="First Name" />
          <Input placeholder="Birth Date" type="date" />
          <SelectDropDown
            defaultValue="City"
            firstValue="Mumbai"
            secondValue="Delhi"
          />
        </div>
        <div className={styles.RightDiv}>
          <Input placeholder="Last Name" />
          <SelectDropDown
            defaultValue="Country"
            firstValue="India"
            secondValue="Germany"
          />
          <SelectDropDown
            defaultValue="Role"
            firstValue="Student"
            secondValue="Contributor"
          />
        </div>
      </div>
      <AgreementAndCaptcha />
      <div className={styles.WelcomeSpace} />
      <Button continueBtn value="Continue" />
    </div>
  )
}

export default WelcomePage
