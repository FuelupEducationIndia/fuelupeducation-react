import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
import FooterLogo from '../../images/Group 64.png'
import Group54 from '../../images/Group54.png'
import Group57 from '../../images/Group57.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__company}>
        <img src={FooterLogo} alt="" className={styles.footer__logo} />
        <p className={styles.footer__copyright}>
          &copy; 2020 Safed Pankh Foundation
        </p>
      </div>
      <ul className={styles.footer__list}>
        <li className={styles.footer__list__item}>
          <Link to="/" className={styles.footer__link}>
            About Us
          </Link>
        </li>
        <li className={styles.footer__list__item}>
          <Link to="/" className={styles.footer__link}>
            Careers
          </Link>
        </li>
        <li className={styles.footer__list__item}>
          <Link to="/" className={styles.footer__link}>
            Blogs
          </Link>
        </li>
        <li className={styles.footer__list__item}>
          <Link to="/" className={styles.footer__link}>
            Privacy Policy
          </Link>
        </li>
        <li className={styles.footer__list__item}>
          <Link to="/" className={styles.footer__link}>
            Terms and Conditions
          </Link>
        </li>
      </ul>
      <ul className={styles.footer__list}>
        <li className={styles.footer__list__item}>
          <Link to="/" className={styles.footer__link}>
            User Guildlines
          </Link>
        </li>
        <li className={styles.footer__list__item}>
          <Link to="/" className={styles.footer__link}>
            Site Map
          </Link>
        </li>
        <li className={styles.footer__list__item}>
          <Link to="/" className={styles.footer__link}>
            Refund Policy
          </Link>
        </li>
        <li className={styles.footer__list__item}>
          <Link to="/" className={styles.footer__link}>
            Legal Notices
          </Link>
        </li>
        <li className={styles.footer__list__item}>
          <Link to="/" className={styles.footer__link}>
            Plus subscriptions T&C
          </Link>
        </li>
      </ul>
      <div className={styles.footer__app}>
        <p className={styles.footer__app__heading}>Students App</p>
        <div className={styles.footer__assets}>
          <img src={Group54} alt="" className={styles.footer__assets__item} />
          <img src={Group57} alt="" className={styles.footer__assets__item} />
        </div>
      </div>
      <div className={styles.footer__app}>
        <p className={styles.footer__app__heading}>Teachers App</p>
        <div className={styles.footer__assets}>
          <img src={Group54} alt="" className={styles.footer__assets__item} />
          <img src={Group57} alt="" className={styles.footer__assets__item} />
        </div>
      </div>
    </div>
  )
}

export default Footer
