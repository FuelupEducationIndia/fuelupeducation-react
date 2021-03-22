import React, { useReducer, useState } from 'react'
import { useForm } from 'react-hook-form'
import attachment from '../../../../../assets/images/attachment.png'
import styles from './Report.module.scss'

const Form = () => {
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
    <form className={styles.Form}>
      <div className={styles.Row}>
        <h5 className={styles.Label}>Full Name</h5>
        <input
          name="Fullname"
          type="text"
          // value={user.name}
          // onChange={handleInput}
          placeholder=""
        />
      </div>
      <div className={styles.Row}>
        <h5 className={styles.Label}>Issue Title</h5>
        <input
          name="Issue Title"
          type="text"
          // value={user.title}
          // onChange={handleInput}
          placeholder=""
        />
      </div>
      <div className={styles.Row}>
        <h5 className={styles.Label}>Priority</h5>
        <div className={styles.Buttons}>
          <button type="button" className={styles.LowButtons}>
            Low
          </button>
          <button type="button" className={styles.MediumButtons}>
            Medium
          </button>
          <button type="button" className={styles.HighButtons}>
            High
          </button>
        </div>
      </div>
      <div className={styles.Row}>
        <h5 className={styles.Label}>Discription</h5>
        <div className={styles.Wrapper}>
          <textarea
            name="description"
            // value={user.description}
            // onChange={handleInput}
            type="text"
            placeholder=""
            className={styles.Discription}
          />
          <img src={attachment} alt="attach" />
        </div>
      </div>
      <div className={styles.Row}>
        <h5 className={styles.CaptchaText}>Enter Captcha</h5>
        <input
          className={styles.Captcha}
          name="userInput"
          type="text"
          placeholder=""
        />
        <div className={styles.Row}>
          <h5 className={styles.CaptchaText}>Captcha Code</h5>
          <input
            className={styles.CaptchaCode}
            name="userInput"
            type="text"
            placeholder=""
          />
        </div>
      </div>
      <div className={styles.RowSend}>
        <button type="submit" className={styles.Send}>
          Send
        </button>
      </div>
    </form>
  )
}
export default Form
