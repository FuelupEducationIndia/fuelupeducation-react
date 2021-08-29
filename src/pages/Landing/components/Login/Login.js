import React from 'react'
import styles from './Login.module.scss'

export default function Login() {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_dialog}>
        <div className={styles.modal_header} />
        <div className={styles.modal_body}>
          <h1 className={styles.heading_text}>Sign In</h1>
          <p className={styles.heading_para}>
            Please sign in to start your lesson
          </p>

          <form>
            <div className={styles.form_group}>
              <input type="text" name="name" required />
              <label>Email/ Phone number</label>
            </div>
            <div className={styles.form_group}>
              <input
                type="password"
                name="password"
                required
                style={{ marginBottom: '4px' }}
              />
              <label>Password</label>
            </div>
            <a href="#">Forgot password?</a>
            <div className={styles.form_group} style={{ marginTop: '20px' }}>
              <select required className={styles.select_wrapper}>
                <option value="" disabled selected>
                  Role
                </option>
                <option value="0">Student</option>
                <option value="1">Teacher</option>
              </select>
            </div>
            <div className={styles.customCheckbox}>
              <div>
                <input type="checkbox" />
              </div>
              <label>
                I have read and agree with the terms and conditions as well as
                the Privacy Policy of Fuelup Education
              </label>
            </div>
            <div className={styles.btnContainer}>
              <button className={styles.btn}>Sign in</button>
            </div>
          </form>
          <div>
            <div className={styles.customOr}>
              <div className={styles.borderAfter} />
              <span className={styles.or}>Or</span>
            </div>
          </div>
          <div
            className={styles.otherImg}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/600px-Google_%22G%22_Logo.svg.png"
              width="30px"
              height="30px"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQckwtHMiZGuEj2GdFe-JyXXw0Ktj5EqX_C2XNf1Ou-jzrdJ-MG8zfPvcHRSLM2hhJMHzc&usqp=CAU" width="40px" />
            <img src="https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png" width="30px" />
            <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Telegram-Logo-PNG-Image.png" width="35px" />
            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" width="35px" />
          </div>
          <p style={{ textAlign: 'center', margin: '10px 0px' }}>
            Already have an account? <a href="#">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  )
}
