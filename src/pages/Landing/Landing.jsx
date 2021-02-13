import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

import styles from './Landing.module.scss'
import Hero from './components/Hero/Hero'
import { FormInput } from '../../components/UI/Input'

const Landing = props => {
  const form = useForm()
  return (
    <>
      <div className={styles.Landing}>
        <NavBar isAuth={false} />
        <Hero />
        <div className={styles.backgroundImage} />
        <div className={styles.backgroundImage2} />
        <FormProvider {...form}>
          <FormInput autoComplete="on" className="class1" name="name" />
        </FormProvider>
      </div>
      <Footer />
    </>
  )
}

Landing.propTypes = {}

export default Landing
