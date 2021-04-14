import React from 'react'
import PropTypes from 'prop-types'

import styles from './Places.module.scss'
import Button from '../../../../components/UI/Button/Button'
import Baby from '../../images/mask-group-1.png'

const Places = ({ className, header, paragraph }) => {
  return (
    <div className={styles[className]}>
      <img src={Baby} alt="Baby" />
      <div className={styles.Places__Text}>
        <h1>{header}</h1>
        <p>{paragraph}</p>
        <Button
          typeBtn="button"
          className="ButtonStartLearning"
          text="Donate Now"
          icon="ArrowRight"
        />
      </div>
    </div>
  )
}

Places.propTypes = {
  className: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
}

export default Places
