import React from 'react'

import SignInAndUpHeading from '../../components/UI/sign-in-up-heading/SignInAndUpHeading'
import Input from '../../components/UI/input/Input'
import PasswordInput from '../../components/UI/password-input/PasswordInput'
import SocialMediaSignIn from '../../components/UI/social-media-sign-in/SocialMediaSignIn'
import AgreementAndCaptcha from '../../components/UI/agreement-and-captcha/AgreementAndCaptcha'
import Button from '../../components/UI/button/Button'
import SelectDropDown from '../../components/UI/select-dropdown/SelectDropDown'

import styles from './SignIn.modules.scss'

import { ReactComponent as Close } from '../../components/icons/icons-svg/close.svg'

const SignIn = ({ showSignIn, setShowSignIn }) => {
  const handleClick = () => {
    setShowSignIn(!showSignIn)
  }

  return (
    <div className={styles.SignInDiv}>
      <div className={styles.SignInInnerDiv}>
        <Close onClick={handleClick} className={styles.Close} />
        <SignInAndUpHeading
          h1Text="Sign In"
          spanText="Please sign in to start your lesson"
        />
        <form>
          <div className={styles.InputsDiv}>
            <Input placeholder="Email/Phone number" />
            <PasswordInput placeholder="Password" forgotPw />
            <SelectDropDown
              defaultValue="Role"
              firstValue="Student"
              secondValue="Contributor"
            />
          </div>
          <AgreementAndCaptcha />
          <Button value="Sign In" />
        </form>

        <SocialMediaSignIn />

        <span className={styles.Biometric}>Use Biometric Sign In</span>
        <SelectDropDown
          defaultValue="- Select bio method -"
          firstValue="Fingerprint"
          secondValue="Face ID"
          thirdValue="QR Code"
        />
      </div>
    </div>
  )
}

export default SignIn
