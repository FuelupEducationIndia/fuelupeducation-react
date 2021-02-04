import React, { useState } from 'react'

import WelcomePage from '../welcome-page/WelcomePage'
import { ReactComponent as Close } from '../../components/icons/icons-svg/close.svg'
import SignInAndUpHeading from '../../components/UI/sign-in-up-heading/SignInAndUpHeading'
import Input from '../../components/UI/input/Input'
import PasswordInput from '../../components/UI/password-input/PasswordInput'
import Button from '../../components/UI/button/Button'

import styles from './SignUp.module.scss'
import SocialMediaSignIn from '../../components/UI/social-media-sign-in/SocialMediaSignIn'

const SignUp = ({ showSignUp, setShowSignUp, showSignIn, setShowSignIn }) => {
  const [welcome, setWelcome] = useState(false)

  const handleClick = () => {
    setShowSignUp(!showSignUp)
  }

  const handleClick2 = () => {
    setShowSignUp(!showSignUp)
    setShowSignIn(!showSignIn)
  }

  const goToWelcomePage = e => {
    e.preventDefault()
    setWelcome(!welcome)
  }

  return (
    <div className={styles.SignInDiv}>
      <div className={styles.SignInInnerDiv}>
        <Close onClick={handleClick} className={styles.Close} />
        {!welcome ? (
          <div className={styles.SignUpDivContent}>
            <SignInAndUpHeading
              h1Text="Sign Up"
              spanText="Please register your lesson account here"
            />
            <form>
              <div className={styles.InputsDiv}>
                <Input placeholder="Email" />
                <PasswordInput placeholder="Password" forgotPw={false} />
                <PasswordInput
                  placeholder="Confirm Password"
                  forgotPw={false}
                />
              </div>
              <Button onClick={goToWelcomePage} value="Sign Up" />
            </form>
            <SocialMediaSignIn />
            <span className={styles.LastSpan}>
              Already have an account?{' '}
              <span onClick={handleClick2} className={styles.Link}>
                Sign In
              </span>
            </span>
          </div>
        ) : (
          <WelcomePage />
        )}
      </div>
    </div>
  )
}

export default SignUp
