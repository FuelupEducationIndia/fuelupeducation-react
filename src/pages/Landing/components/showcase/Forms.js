import React, { useState } from 'react'
import styles from './Forms.module.scss'

const Forms = () => {
  const [selectedFile, setSelectedFile] = useState()
  const [isFilePicked, setIsFilePicked] = useState(false)
  const [comments, setComments] = useState()

  const onFileChange = e => {
    setSelectedFile(e.target.files[0])
    setIsFilePicked(true)
  }
  const onCommentChange = e => {
    setComments(e.target.value)
  }

  const handleSubmission = () => {}

  return (
    <form onSubmit={handleSubmission}>
      <input
        type="file"
        name="file"
        onChange={onFileChange}
        className={styles.Formsinput}
      />
      {isFilePicked ? (
        <div>
          <p>
            Filename:
            {selectedFile.name}
          </p>
          <p>
            Filetype:
            {selectedFile.type}
          </p>
          <p>
            Size in bytes:
            {selectedFile.size}
          </p>
          <p>
            lastModifiedDate:
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p />
      )}
      <p>comments</p>
      <textarea
        cols={60}
        rows={6}
        type="text"
        name="comments"
        onChange={onCommentChange}
      />
      <div>
        <input
          type="submit"
          value=" Submit Assignment"
          className={styles.FormsButton}
        />
      </div>
    </form>
  )
}

export default Forms
