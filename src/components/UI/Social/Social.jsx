import React from 'react'
import PropTypes from 'prop-types'
import styles from './Social.module.scss'

import Instagram from '../../../assets/images/instagram.png'
import Twitter from '../../../assets/images/twitter.png'
import Telegram from '../../../assets/images/telegram.png'
import Youtube from '../../../assets/images/youtube.png'
import Facebook from '../../../assets/images/facebook.png'
import Linkedin from '../../../assets/images/linkedin.jpg'

const Social = ({ text, className }) => {
  return (
    <div className={styles[className]}>
      <p>{text}</p>
      <a href="/googlestore">
        <img src={Instagram} alt="Instagram" />
      </a>
      <a href="/appsore">
        <img src={Twitter} alt="Twitter" />
      </a>
      <a href="/telegram">
        <img src={Telegram} alt="Telegram" />
      </a>
      <a href="/facebook">
        <img src={Facebook} alt="Facebook" />
      </a>
      <a href="/youtube">
        <img src={Youtube} alt="Youtube" />
      </a>
      <a href="/linkedin">
        <img src={Linkedin} alt="Linkedin" />
      </a>
    </div>
  )
}

Social.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Social
