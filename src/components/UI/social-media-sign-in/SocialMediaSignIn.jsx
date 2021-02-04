import React from 'react'

import styles from './SocialMediaSignIn.module.scss'

import whatsapp from '../../../assets/signIn-signUpImages/whatsapp_logo.png'
import facebook from '../../../assets/signIn-signUpImages/facebook_logo.png'
import telegram from '../../../assets/signIn-signUpImages/telegram_logo.png'
import windows from '../../../assets/signIn-signUpImages/windows_logo.png'
import google from '../../../assets/signIn-signUpImages/google_logo.png'

const SocialMediaSignIn = () => {
  return (
    <div>
      <span className={styles.or}>Or</span>
      <div className={styles.LogosDiv}>
        <img src={google} alt="google" />
        <img src={facebook} alt="facebook" />
        <img src={windows} alt="windows" />
        <img src={telegram} alt="telegram" />
        <img src={whatsapp} alt="whatsapp" />
      </div>
    </div>
  )
}

export default SocialMediaSignIn
