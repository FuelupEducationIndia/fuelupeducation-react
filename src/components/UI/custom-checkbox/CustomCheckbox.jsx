import React/* , { useRef }  */from 'react'
import { useFormContext } from 'react-hook-form'

import styles from './CustomCheckbox.module.scss'

const CustomCheckbox = (props) => {
  const { labelInputId, name, size } = props;
  const { register } = useFormContext();
  /* const labelRef = useRef(null);

  const lightUp = () => {
    labelRef.current.style.border = '1px solid red';
  } */

  return (
    <div className={styles.checkBoxInnerDiv}>
      <input
        className={ size === "big" ? styles.bigCheckboxR : styles.bigCheckbox }
        id={labelInputId}
        name={name}
        type="checkbox"
        ref={register({ required: true })}
      />
      <label /* ref={labelRef}  */htmlFor={labelInputId} />
    </div>
  )
}

export default CustomCheckbox
