import React from 'react'
import PropTypes from 'prop-types'

import styles from './Hero.module.scss'

const Hero = ({ className, mainHeading, secondaryHeading }) => {
  return (
    <div className={styles[className]}>
      <div className={styles.HeroMainHeading}>{mainHeading}</div>
      <div className={styles.HeroSecondaryHeading}>{secondaryHeading}</div>
    </div>
  )
}

Hero.propTypes = {
  className: PropTypes.string.isRequired,
  mainHeading: PropTypes.string.isRequired,
  secondaryHeading: PropTypes.string.isRequired,
}

export default Hero
