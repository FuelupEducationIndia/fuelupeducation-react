import React from 'react'
import styles from './Section.module.scss'

const Section = ({
  heading,
  text,
  btn,
  position,
  asset,
  android,
  apple,
  image,
}) => {
  const toPosition = {
    float: position,
  }
  return (
    <div className={styles.section}>
      <div className={styles.section__1} style={toPosition}>
        <div className={styles.wrapper}>
          <h1 className={styles.section__header}>{heading}</h1>
          <p className={styles.section__text}>{text}</p>
          {btn && (
            <button type="button" className={styles.section__btn}>
              {btn}
            </button>
          )}
          {asset && (
            <div className={styles.section__asset}>
              <img src={android} alt="" className={styles.section__android} />
              <img src={apple} alt="" className={styles.section__apple} />
            </div>
          )}
        </div>
      </div>

      {image && (
        <div className={styles.section__2}>
          {image && <img className={styles.finalImage} src={image} alt="" />}
        </div>
      )}
    </div>
  )
}

export default Section
