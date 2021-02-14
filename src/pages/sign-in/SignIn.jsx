import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import SignInAndUpHeading from '../../components/UI/sign-in-up-heading/SignInAndUpHeading'
import Input from '../../components/UI/input/Input'
import CustomCheckbox from '../../components/UI/custom-checkbox/CustomCheckbox'
import SocialMediaSignIn from '../../components/UI/social-media-sign-in/SocialMediaSignIn'
import SelectDropDown from '../../components/UI/select-dropdown/SelectDropDown'
import recaptcha from '../../assets/signIn-signUpImages/recaptcha_logo.png'

import styles from './SignIn.module.scss'

import { CloseIcon } from '../../components/icons/icons'

const SignIn = ({ showSignIn, setShowSignIn }) => {  
  const methods = useForm();
  const methods2 = useForm();
  const handleClick = () => {
    setShowSignIn(!showSignIn)
  }

  const onFormSubmit = data => console.log(data)

  return (
    <div className={styles.SignInDiv}>
      <div className={styles.SignInInnerDiv}>
        <CloseIcon className={styles.Close} onClick={handleClick} />
        <SignInAndUpHeading
          h1Text="Sign In"
          spanText="Please sign in to start your lesson"
        />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onFormSubmit)}>
            <div className={styles.InputsDiv}>
              <Input name="email_or_phone_number" required={true} type="text" labelInputId="EmailPhone" label="Email/Phone Number" />
              { methods.errors.email_or_phone_number && <span className={styles.Error}>Email/Phone Field Is Required</span> }
              <Input name="password" required={true} type="password" labelInputId="Password" label="Password" />
              { methods.errors.password && <span className={styles.Error}>Password Field Is Required</span> }
              <SelectDropDown
                name="role"
                defaultValue='- Role -'
                otherValues={ ['Student', 'Contributor'] }
                required={true}
              />
              { methods.errors.role && <span className={styles.Error}>Select Your Role</span> }
              <div className={styles.CheckBoxDiv}>
                <CustomCheckbox name="terms_and_agreement" size="small" labelInputId="agreement" />
                <span className={styles.CheckBoxSpan}>
                  I have read and agree with the terms and conditions as well as the
                  Privacy Policy of Fuelup Education
                </span>
              </div>
              <div className={styles.recaptchaDiv}>
                <div className={styles.recaptchaInnerDiv}>
                  <CustomCheckbox name="recaptcha" size="big" labelInputId="recaptcha" />
                  <span className={styles.CheckBoxSpan}>I'm not a robot</span>
                </div>
                <img src={recaptcha} alt="recaptcha" />
              </div>
            </div>
            <input className={styles.SignInBtn} type="submit" value="Sign In"/>
          </form>
        </FormProvider>
        <SocialMediaSignIn />
        <span className={styles.Biometric}>Use Biometric Sign In</span>
        <FormProvider {...methods2}>
          <form onSubmit={methods2.handleSubmit(onFormSubmit)}>
            <SelectDropDown
              name="biometric_sign_in"
              defaultValue='- Select bio method -'
              otherValues={ ['Fingerprint', 'Face ID', 'QR Code'] }
              signIn={true}
            />
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default SignIn
