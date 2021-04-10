import React from 'react'
import PropTypes from 'prop-types'
import styles from './Social.module.scss'

import {
  TwitterIcon,
  InstagramIcon,
  TelegramIcon,
  FacebookIcon,
  YoutubeIcon,
  LinkedinIcon,
} from '../../icons/icons'

const Social = ({ text, className }) => {
  return (
    <div className={styles[className]}>
      <p>{text}</p>
      <a href="/twitter">
        <TwitterIcon className="Twitter" />
      </a>
      <a href="/instagram">
        <InstagramIcon className="Instagram" />
      </a>
      <a href="/telegram">
        <TelegramIcon className="Telegram" />
      </a>
      <a href="/facebook">
        <FacebookIcon className="Facebook" />
      </a>
      <a href="/youtube">
        <YoutubeIcon className="Youtube" />
      </a>
      <a href="/linkedin">
        <LinkedinIcon className="Linkedin" />
      </a>
    </div>
  )
}

Social.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Social
