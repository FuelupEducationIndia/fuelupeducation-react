/* eslint-disable prettier/prettier */
import React from 'react'
import App from './components/App/App'
import Course from './components/Course/Course'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Places from './components/Places/Places'

import styles from './Landing.module.scss'
import SimpleSwiper from './components/Sliders/Sliders'

const Landing = props => {
  const items = [
    {
      id: 1,
      className: 'Course',
      header: 'Interactive quizzess, tests & exams',
      paragraph:
        'Videos that help you visualize each concept, making it easier to understand. Clearer concepts lead to higher scores!',
    },
    {
      id: 2,
      className: 'CourseRight',
      header: 'Interactive quizzess, tests & exams',
      paragraph:
        'Videos that help you visualize each concept, making it easier to understand. Clearer concepts lead to higher scores!',
    },
    {
      id: 3,
      className: 'Course',
      header: 'Interactive quizzess, tests & exams',
      paragraph:
        'Videos that help you visualize each concept, making it easier to understand. Clearer concepts lead to higher scores!',
    },
    {
      id: 4,
      className: 'CourseRight',
      header: 'Interactive quizzess, tests & exams',
      paragraph:
        'Videos that help you visualize each concept, making it easier to understand. Clearer concepts lead to higher scores!',
    },
  ]
  const itemList = []
  items.forEach((item, index) => {
    const course = (
      <Course
        key={item.id}
        className={item.className}
        header={item.header}
        paragraph={item.paragraph}
      />
    )
    itemList.push(course)
  })
  return (
    <>
      <div className={styles.Landing}>
        <NavBar isAuth={false} />
        <SimpleSwiper />
      </div>
      {itemList}
      <Places
        className="Places"
        header="Give Where Most Needed"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde, maxime dolore obcaecati corrupti repudiandae minima molestias dolor soluta id in architecto debitis voluptates, accusamus laborum nisi repellendus optio temporibus."
      />
      <App
        className="App"
        header="Start achieving academic excellence"
        paragraph="Download lessons &amp; learn anytime, anywhere with our mobile application"
      />
      <Footer />
    </>
  )
}

Landing.propTypes = {}

export default Landing
