/* eslint-disable prettier/prettier */
import React from 'react'

import styles from './Footer.module.scss'

import { LogoIcon, CopyRightIcon } from '../../../../components/icons'

import AppStore from '../../../../components/UI/AppStore/AppStore'
import Social from '../../../../components/UI/Social/Social'

const Footer = () => {
  return (
    <footer>
      <div className={styles.Logo}>
        <LogoIcon className="LogoIcon" />
        <p>
          <CopyRightIcon className="CopyRightIcon" />
          2021 Fuelup Education
        </p>
      </div>
      <div className={styles.Link}>
        <ul>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#about">Carres</a>
          </li>
          <li>
            <a href="#about">Blogs</a>
          </li>
          <li>
            <a href="#about">Privacy policy</a>
          </li>
          <li>
            <a href="#about">Terms and Conditions</a>
          </li>
        </ul>
      </div>
      <div className={styles.Link}>
        <ul>
          <li>
            <a href="#about">Users Guidelines</a>
          </li>
          <li>
            <a href="#about">Site map</a>
          </li>
          <li>
            <a href="#about">refund policy</a>
          </li>
          <li>
            <a href="#about">legal notices</a>
          </li>
          <li>
            <a href="#about">plus subscriptions T&amsp;C </a>
          </li>
        </ul>
      </div>
      <div className="social">
        <AppStore
          className="AppStore--small"
          text="Download Fuelupeducation App"
        />
        <Social className="SocialLink" text="Subscribe Us" />
      </div>
    </footer>
  )
}

export default Footer
