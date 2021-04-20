/* eslint-disable import/no-unresolved */
import React from 'react'
import happyIcon from 'assets/images/happy.png'
import attachIcon from 'assets/images/attach.png'
import microIcon from 'assets/images/micro.png'
import { useForm } from 'react-hook-form'
import styles from './Input.module.scss'

export default () => {
  const { register, handleSubmit, errors } = useForm() // initialize the hook
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form className={styles.Input} onSubmit={handleSubmit(onSubmit)}>
      <img src={happyIcon} alt="happy" />
      <img src={attachIcon} alt="attach" />
      <input
        name="userInput"
        type="text"
        placeholder="Type messages here..."
        ref={register({ required: true })}
      />
      {errors.userInput && 'message is required.'}
      <img src={microIcon} alt="micro" />
    </form>
  )
}
