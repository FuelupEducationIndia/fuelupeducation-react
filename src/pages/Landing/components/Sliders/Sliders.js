import React, { useState, useRef } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Sliders.module.scss'

import Hero from '../Hero/Hero'

const SimpleSwiper = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings} className={styles.SliderCustom}>
      <Hero
        className="Hero"
        mainHeading="Meet our authors"
        secondaryHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Hero
        className="Hero2"
        mainHeading="Think of Us in Your Will"
        secondaryHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </Slider>
  )
}

export default SimpleSwiper
