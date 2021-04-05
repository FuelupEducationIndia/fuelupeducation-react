import React from 'react'
import imgFile from '../../../../assets/images/file2.png'
import style from './CreatAssignment.module.scss'
import DropDownSelect from '../DropDownSelect/DropDownSelect'
const CreateAssignment = props => {
  var University = ['Rajasthan board', 'my University']
  var Semester = [
    'Semester 1',
    'Semester 2',
    'Semester 3',
    'Semester 4',
    'Semester 5',
    'Semester 6',
  ]
  var Course = ['ss2021 - The Solar system', 'ss2022 - The Earth']
  var YourName = ['Instructors Name', 'Instructors Name 2']
  var Group = ['Select Student/ Group Name']
  var type = ['Project Repot']
  var Language = ['English', 'Hindi', 'Gujarati', 'Marathi']
  var Due = ['Choose your due']

  return (
    <div className={style.createDiv}>
      <div className={style.div100W}>
        <label className={style.unlabel}>Board/University</label>
        <DropDownSelect getoptions={University} />
      </div>
      <div className={style.div100W}>
        <label className={style.unlabel}>Class/Semester</label>
        <DropDownSelect getoptions={Semester} />
      </div>
      <div className={style.div100W}>
        <label className={style.unlabel}>Course</label>
        <DropDownSelect getoptions={Course} />
      </div>
      <div className={style.div100W}>
        <label className={style.unlabel}>Your Name</label>
        <DropDownSelect getoptions={YourName} />
      </div>
      <div className={style.div100W}>
        <label className={style.unlabel}>Student/ Group</label>
        <DropDownSelect getoptions={Group} />
      </div>
      <div className={style.div100W}>
        <label className={style.unlabel}>Assignment type</label>
        <DropDownSelect getoptions={type} />
      </div>
      <div className={style.div100W}>
        <label className={style.unlabel}>Grade</label>
        <div className={style.div30W}>
          <input
            type="text"
            className={style.inputText}
            placeholder="Type grade here"
          />
        </div>
      </div>
      <div className={style.div100W}>
        <label className={style.unlabel}>Language</label>
        <div className={style.smallInput}>
          <DropDownSelect getoptions={Language} />
        </div>
      </div>
      <div className={style.div100W}>
        <label className={style.unlabel}>Due</label>
        <DropDownSelect getoptions={Due} />
      </div>
      <div className={style.div100W}>
        <label className={style.unlabel}>Assignment Tiltle</label>
        <div className={style.div60W}>
          <input
            type="text"
            className={style.inputText}
            placeholder="Type Tiltle here"
          />
        </div>
      </div>
      <div className={style.div100W}>
        <label className={style.unlabel}>Overview</label>
        <div className={style.div30W}>
          <textarea type="text" className={style.inputText} />
        </div>
      </div>
      <div className={style.div100W}>
        <label className={style.unlabel}>Notes</label>
        <div className={style.div30W}>
          <textarea type="text" className={style.inputText} />
        </div>
      </div>
      <div className={style.div100W}>
        <label className={style.unlabel}>Deliverable</label>
        <div className={style.div30W}>
          <textarea type="text" className={style.inputText} />
        </div>
      </div>
      <div className={style.div100W}>
        <label className={style.unlabel}>Upload Document</label>
        <div className={style.div30W}>
          <div className={style.dragArea}>
            <div>
              <img src={imgFile} />
            </div>
            <div>
              <span>Drag And Drop to </span>
              <button>Browse</button>
            </div>
            <input type="file" hidden />
          </div>
        </div>
      </div>
      <div className={style.div100W}>
        <label className={style.unlabel}>Enter Captcha</label>
        <div className={style.div30W}>
          <input
            type="text"
            className={style.inputText + ' ' + style.smallInput}
          />
          <span>Captcha Code</span>
          <span className={style.spanC}>11f32G</span>
        </div>
      </div>
      <div className={style.div100W}>
        <div className={style.div30W}>
          <button className={style.btnUp}>Upload</button>
        </div>
      </div>
    </div>
  )
}

CreateAssignment.propTypes = {}

export default CreateAssignment
