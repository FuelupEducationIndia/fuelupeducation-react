import React, { useState } from 'react'
import PropTypes from 'prop-types'

import checkmark from 'assets/signIn-signUpImages/checkmark.jpg'
import styles from './BiometricSignIn.module.scss'

const BiometricSignIn = ({ closeModal, displayModal, bioSignInInfo }) => {
    const [success, setSuccess] = useState(false)

    const divStyle = {
        display: displayModal ? 'flex' : 'none',
    }

    const handleClick = () => setSuccess(!success)

    const closeTheModal = e => {
        e.stopPropagation()
        closeModal()
    }

    return (
        <div className={styles.modal} onClick={closeTheModal} style={divStyle}>
            <div className={styles.ModalContentDiv} onClick={e => e.stopPropagation()}>
                <div className={styles.ModalHeading}>
                    <div className={styles.ModalHeadingText}>Sign In</div>
                    <div className={styles.close} onClick={closeTheModal}>&times; </div>
                </div>
                <div className={styles.ModalContentHeading}>
                    <div className={styles.Static}>
                        <span className={styles.Grey}>To continue to</span>
                        &nbsp;
                        <span className={styles.Purple}>Fuelup Education</span>
                    </div>
                    <div className={styles.FairlyStatic}>
                        <span className={styles.Grey}>{bioSignInInfo.message}</span>
                            &nbsp;
                        <span className={styles.Purple}>Fuelup Education can verify it's you</span>
                    </div>
                    <div className={styles.SignInImage}>
                        {
                            !success ? (
                                <img style={bioSignInInfo.styles} src={bioSignInInfo.image} />
                            ) : (
                                <div className={styles.SuccessDiv}>
                                    <img className={styles.CheckMarkIcon} src={checkmark} />
                                    <span className={styles.SuccessText}>
                                        {bioSignInInfo.successText}
                                    </span>
                                </div>
                            )
                        }
                    </div>
                    <span className={success ? styles.Hide : styles.Sensor}>{bioSignInInfo.imageText}</span>
                    {
                        !bioSignInInfo.hide && (
                            <div className={success ? styles.Hide : styles.CancelOrSignIn}>
                                <span onClick={closeTheModal} id={styles.Cancel}>Cancel</span>
                                <button onClick={handleClick} className={styles.SignInBtn}>Sign In</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

BiometricSignIn.propTypes = {
    closeModal: PropTypes.func.isRequired,
    displayModal: PropTypes.bool.isRequired,
    bioSignInInfo: PropTypes.object.isRequired,
}

export default BiometricSignIn
