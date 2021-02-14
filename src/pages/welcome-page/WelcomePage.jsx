import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import Input from '../../components/UI/input/Input'
import SelectDropDown from '../../components/UI/select-dropdown/SelectDropDown'
import CustomCheckbox from '../../components/UI/custom-checkbox/CustomCheckbox'

import recaptcha from '../../assets/signIn-signUpImages/recaptcha_logo.png'

import styles from './WelcomePage.module.scss'

const WelcomePage = () => {
  const methods = useForm()

  const onFormSubmit = data => console.log(data)

  return (
    <div>
      <div className={styles.WelcomeHeading}>
        <h1>Welcome!</h1>
        <span>Please help us fill in your basic information</span>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onFormSubmit)}>
          <div className={styles.FieldDiv}>
            <div className={styles.LeftDiv}>
              <Input
                name="first_name"
                required
                type="text"
                labelInputId="FirstName"
                label="First Name"
              />
              {methods.errors.first_name && (
                <span className={styles.Error}>
                  First Name Field Is Required
                </span>
              )}
              <Input
                name="birth_date"
                required
                type="date"
                labelInputId="BirthDate"
                label="Birth Date"
              />
              {methods.errors.birth_date && (
                <span className={styles.Error}>
                  Birth Date Field Is Required
                </span>
              )}
              <SelectDropDown
                name="city"
                required
                defaultValue="- City -"
                otherValues={['Mumbai', 'Delhi']}
              />
              {methods.errors.city && (
                <span className={styles.Error}>Select Your City</span>
              )}
            </div>
            <div className={styles.RightDiv}>
              <Input
                name="last_name"
                type="text"
                labelInputId="LastName"
                label="Last Name"
              />
              {methods.errors.last_name && (
                <span className={styles.Error}>
                  Last Name Field Is Required
                </span>
              )}
              <SelectDropDown
                name="country"
                required
                defaultValue="- Country -"
                otherValues={['India', 'Germany', 'Australia']}
              />
              {methods.errors.country && (
                <span className={styles.Error}>Select Your Country</span>
              )}
              <SelectDropDown
                name="role"
                defaultValue="- Role -"
                otherValues={['Student', 'Contributor']}
              />
              {methods.errors.role && (
                <span className={styles.Error}>Select Your Role</span>
              )}
            </div>
          </div>
          <div className={styles.CheckBoxDiv}>
            <CustomCheckbox
              name="terms_and_agreement"
              size="small"
              labelInputId="agreement"
            />
            <span className={styles.CheckBoxSpan}>
              I have read and agree with the terms and conditions as well as the
              Privacy Policy of Fuelup Education
            </span>
          </div>
          <div className={styles.recaptchaDiv}>
            <div className={styles.recaptchaInnerDiv}>
              <CustomCheckbox
                name="recaptcha"
                size="big"
                labelInputId="recaptcha"
              />
              <span className={styles.CheckBoxSpan}>I'm not a robot</span>
            </div>
            <img src={recaptcha} alt="recaptcha" />
          </div>
          <div className={styles.WelcomeSpace} />
          <input type="submit" id={styles.ContinueBtn} value="Continue" />
        </form>
      </FormProvider>
    </div>
  )
}

export default WelcomePage
