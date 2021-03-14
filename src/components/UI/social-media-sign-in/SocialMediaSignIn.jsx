import React from 'react'

import whatsapp from '../../../assets/signIn-signUpImages/whatsapp_logo.png'
import facebook from '../../../assets/signIn-signUpImages/facebook_logo.png'
import telegram from '../../../assets/signIn-signUpImages/telegram_logo.png'
import windows from '../../../assets/signIn-signUpImages/windows_logo.png'
import google from '../../../assets/signIn-signUpImages/google_logo.png'
import styles from './SocialMediaSignIn.module.scss'

const SocialMediaSignIn = () => {
  const imageSrc = [google, facebook, windows, telegram, whatsapp]
  return (
    <div>
      <span className={styles.or}>Or</span>
      <div className={styles.LogosDiv}>
        {imageSrc.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
    </div>
  )
}

export default SocialMediaSignIn
