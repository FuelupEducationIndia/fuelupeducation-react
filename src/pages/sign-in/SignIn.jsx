import React from 'react'

import SignInAndUpHeading from '../../components/UI/sign-in-up-heading/SignInAndUpHeading'
import Input from '../../components/UI/input/Input'
import PasswordInput from '../../components/UI/password-input/PasswordInput'
import SocialMediaSignIn from '../../components/UI/social-media-sign-in/SocialMediaSignIn'
import AgreementAndCaptcha from '../../components/UI/agreement-and-captcha/AgreementAndCaptcha'
import SelectDropDown from '../../components/UI/select-dropdown/SelectDropDown'

import styles from './SignIn.modules.scss'

import { CloseIcon } from '../../components/icons/icons'

const SignIn = ({ showSignIn, setShowSignIn }) => {
  const handleClick = () => {
    setShowSignIn(!showSignIn)
  }

  return (
    <div className={styles.SignInDiv}>
      <div className={styles.SignInInnerDiv}>
        <CloseIcon className={styles.Close} onClick={handleClick} />  
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
          <input type="submit" value="Sign In" className={styles.SignInBtn}/>
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
