import React from 'react'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

import styles from './Landing.module.scss'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'

import Image2 from './images/Image 2.png'
import Group54 from './images/Group54.png'
import Group57 from './images/Group57.png'

const Landing = props => {
  return (
    <>
      <div className={styles.Landing}>
        <NavBar isAuth={false} />
        <Hero />
        <div className={styles.backgroundImage} />
        <div className={styles.backgroundImage2} />
      </div>
      <div className="sections">
        <Section
          position="left"
          heading="Interactive quizzes, tests & exams"
          text="Videos that help you visualize each concept, making it easier to understand. Clearer concepts lead to higher scores!"
          btn="Start Learning"
        />
        <Section
          position="right"
          heading="Mapped to the Syllabus"
          text="Learning journeys are mapped to a student's grade & syllabus. Each chapter comprises small concepts that are stitched together with relevant syllabus."
          btn="Start Learning"
        />
        <Section
          position="left"
          heading="Engaging in Group Discussions"
          text="Crafted to evoke curiosity, this all-new feature will develop student’s critical thinking abilities and strengthen their understanding of core concept"
          btn="Start Learning"
        />
        <Section
          position="right"
          heading="Reports & analytics on student’s performance"
          text="Rich reports are used to guide progress. These great reports are presented to students & parents/guardians via periodic email & SMS"
          btn="Start Learning"
        />
        <Section
          position="left"
          heading="Start achieving academic excellence"
          text="Download lessons & learn anytime, anywhere with our mobile application"
          asset
          image={Image2}
          android={Group54}
          apple={Group57}
        />
      </div>
      <Footer />
    </>
  )
}

Landing.propTypes = {}

export default Landing
