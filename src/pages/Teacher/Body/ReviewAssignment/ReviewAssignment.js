import React from 'react'
import imgFile from '../../../../assets/images/file2.png'
import imglargFile from '../../../../assets/images/filelogo.png'
import downloadCloud from '../../../../assets/images/download-cloud.png'
import style from './ReviewAssignment.module.scss'
import DropDownSelect from '../DropDownSelect/DropDownSelect'
import Summary from '../Summary/Summary'
const ReviewAssignment = props => {
  var Assignment = ['Assignment 1', 'Assignment 2']
  var AssignmenrFiles = [
    'LastName_Assgn1_AssignName.pdf',
    'LastName_Assgn1_AssignName.pdf',
    'LastName_Assgn1_AssignName.pdf',
    'LastName_Assgn1_AssignName.pdf',
    'LastName_Assgn1_AssignName.pdf',
    'LastName_Assgn1_AssignName.pdf',
  ]
  var YourName = ['sarah william', 'sarah william', 'sarah william']

  var Student = ['select Student/Group Name']
  var tabledata = [
    {
      Coures: 'ss2021 - The Solar System',
      instructor: 'Sam Smith',
      'Student/Groups': 'LastName FirstName',
      Submissions: 'LastName_Assgn1_AssignNames.pdf',
      Feedback:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      Flag: 'Need to improve',
      Status: 'Pending',
    },
    {
      Coures: 'ss2021 - The Solar System',
      instructor: 'Sam Smith',
      'Student/Groups': 'LastName FirstName',
      Submissions: 'LastName_Assgn1_AssignNames.pdf',
      Feedback:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      Flag: 'Need to improve',
      Status: 'Pending',
    },
    {
      Coures: 'ss2021 - The Solar System',
      instructor: 'Sam Smith',
      'Student/Groups': 'LastName FirstName',
      Submissions: 'LastName_Assgn1_AssignNames.pdf',
      Feedback:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      Flag: 'Good',
      Status: 'Pending',
    },
    {
      Coures: 'ss2021 - The Solar System',
      instructor: 'Sam Smith',
      'Student/Groups': 'LastName FirstName',
      Submissions: 'LastName_Assgn1_AssignNames.pdf',
      Feedback:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      Flag: 'Need to improve',
      Status: 'Pending',
    },
    {
      Coures: 'ss2021 - The Solar System',
      instructor: 'Sam Smith',
      'Student/Groups': 'LastName FirstName',
      Submissions: 'LastName_Assgn1_AssignNames.pdf',
      Feedback:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      Flag: 'Need to improve',
      Status: 'Pending',
    },
  ]

  return (
    <div className={style.mainDiv}>
      <div className={style.div100W}>
        <label className={style.unlabel}>Folder</label>
        <DropDownSelect getoptions={Assignment} />
      </div>
      <div className={style.div100W}>
        <div className={style.divempty}></div>
        <div className={style.div60W}>
          {AssignmenrFiles.map((item, index) => {
            return (
              <div key={index} className={style.dflex}>
                <img className={style.filelogo} src={imglargFile} />
                <a href="#" className={style.pdftext}>
                  {item}
                </a>
              </div>
            )
          })}
          <button className={style.downloadCloud}>
            <img src={downloadCloud} /> Download all
          </button>
        </div>
      </div>
      <div className={style.div100W}>
        <label className={style.unlabel}>Your Name</label>
        <DropDownSelect getoptions={YourName} />
      </div>
      <div className={style.div100W}>
        <label className={style.unlabel}>Student / Group</label>
        <DropDownSelect getoptions={Student} />
      </div>

      <div className={style.div100W}>
        <label className={style.unlabel}>Feedback</label>
        <div className={style.div30W}>
          <textarea
            type="text"
            className={style.inputText}
            placeholder="Type your feedback here"
          />
        </div>
      </div>

      <div className={style.div100W}>
        <label className={style.unlabel}>Flag</label>
        <div className={style.div30W}>
          <div className={style.formCheck}>
            <input
              className={style.formCheckInput}
              type="radio"
              name="flag"
              id="Radio1"
            />
            <label htmlFor="Radio1" className={style.red}>
              Need to improve
            </label>
            <input
              className={style.formCheckInput}
              type="radio"
              name="flag"
              id="Radio2"
            />
            <label htmlFor="Radio2" className={style.green}>
              Good
            </label>
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
          <button className={style.btnUp}>Submit</button>
        </div>
      </div>
      <Summary tabledata={tabledata} name="Review" />
    </div>
  )
}

ReviewAssignment.propTypes = {}

export default ReviewAssignment
