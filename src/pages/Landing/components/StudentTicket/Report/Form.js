import React, { useReducer, useState } from 'react'
import { useForm } from 'react-hook-form'
import attachment from 'assets/images/attachment.png'
import styles from './Report.module.scss'

export const Form = () => {
  //   const {user,setuser}=useState({
  //     name:"",
  //     title:"",
  //     discription:"",
  //   });
  //   const {record,setrecord}=useState([]);
  //   const handleInput=(e)=>{
  //     const name=e.target.name;
  //     const value=e.target.value;
  //     console.log(name,value);
  //     setuser({...user,[nsme]:value});
  //   }
  //   const Onsubmit=(e)=>{
  //     e.preventDefault();
  // const newRecord={...user};
  // setrecord([...record,newRecord]);
  //   }
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <h5 className={styles.label}>Full Name</h5>
        <input
          name="Fullname"
          type="text"
          // value={user.name}
          // onChange={handleInput}
          placeholder=""
        />
      </div>
      <div className={styles.row}>
        <h5 className={styles.label}>Issue Title</h5>
        <input
          name="Issue Title"
          type="text"
          // value={user.title}
          // onChange={handleInput}
          placeholder=""
        />
      </div>
      <div className={styles.row}>
        <h5 className={styles.label}>Priority</h5>
        <div className={styles.buttons}>
          <div className={styles.low_buttons}>Low</div>
          <button className={styles.medium_buttons}>Medium</button>
          <div className={styles.high_buttons}>High</div>
        </div>
      </div>
      <div className={styles.row}>
        <h5 className={styles.label}>Discription</h5>
        <div className={styles.wrapper}>
          <textarea
            name="description"
            // value={user.description}
            // onChange={handleInput}
            type="text"
            placeholder=""
            className={styles.discription}
          />
          <img src={attachment} alt="attach" />
        </div>
      </div>
      <div className={styles.row}>
        <h5 className={styles.captcha_text}>Enter Captcha</h5>
        <input
          className={styles.captcha}
          name="userInput"
          type="text"
          placeholder=""
        />
        <div className={styles.row}>
          <h5 className={styles.captcha_text}>Captcha Code</h5>
          <input
            className={styles.captcha_code}
            name="userInput"
            type="text"
            placeholder=""
          />
        </div>
      </div>
      <div className={styles.row_send}>
        <button type="submit" className={styles.send}>
          Send
        </button>
      </div>
    </form>
  )
}
