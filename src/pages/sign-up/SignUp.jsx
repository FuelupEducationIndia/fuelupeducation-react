import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm, FormProvider } from 'react-hook-form'

import WelcomePage from '../welcome-page/WelcomePage'
import { CloseIcon } from '../../components/icons/icons'
import SignInAndUpHeading from '../../components/UI/sign-in-up-heading/SignInAndUpHeading'
import Input from '../../components/UI/input/Input'

import styles from './SignUp.module.scss'
import SocialMediaSignIn from '../../components/UI/social-media-sign-in/SocialMediaSignIn'

const SignUp = ({ showSignUp, setShowSignUp, showSignIn, setShowSignIn }) => {
  const [welcome, setWelcome] = useState(false)

  const methods = useForm()
  const onFormSubmit = data => {
    console.log(data)
    setWelcome(!welcome)
  }

  const handleClick = () => {
    setShowSignUp(!showSignUp)
  }

  const handleClick2 = () => {
    setShowSignUp(!showSignUp)
    setShowSignIn(!showSignIn)
  }

  return (
    <div className={styles.SignInDiv}>
      <div className={styles.SignInInnerDiv}>
        <CloseIcon className={styles.Close} onClick={handleClick} />
        {!welcome ? (
          <div className={styles.SignUpDivContent}>
            <SignInAndUpHeading
              h1Text="Sign Up"
              spanText="Please register your lesson account here"
            />
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onFormSubmit)}>
                <div className={styles.InputsDiv}>
                  <Input
                    name="email"
                    required
                    type="email"
                    labelInputId="Email"
                    label="Email"
                  />
                  {methods.errors.email && (
                    <span className={styles.Error}>
                      Email Field Is Required
                    </span>
                  )}
                  <Input
                    name="password"
                    required
                    type="password"
                    labelInputId="Password"
                    label="Password"
                  />
                  {methods.errors.password && (
                    <span className={styles.Error}>
                      Password Field Is Required
                    </span>
                  )}
                  <Input
                    name="confirm_password"
                    required
                    type="password"
                    labelInputId="ConfirmPassword"
                    label="Confirm Password"
                  />
                  {methods.errors.confirm_password && (
                    <span className={styles.Error}>
                      Confirm Password Field Is Required
                    </span>
                  )}
                </div>
                <input
                  type="submit"
                  className={styles.SignUpBtn}
                  value="Sign Up"
                />
              </form>
            </FormProvider>
            <SocialMediaSignIn />
            <span className={styles.LastSpan}>
              Already have an account?
              {' '}
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

SignUp.propTypes = {
  showSignUp: PropTypes.bool.isRequired,
  setShowSignUp: PropTypes.func.isRequired,
  showSignIn: PropTypes.bool.isRequired,
  setShowSignIn: PropTypes.func.isRequired,
}

export default SignUp
