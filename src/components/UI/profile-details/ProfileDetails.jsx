import React from 'react'

import styles from './ProfileDetails.module.scss'
import Edit from '../../../assets/profilePageImages/edit-1.svg'
import ProfileImage from '../../../assets/profilePageImages/profile-image.png'
import GooglePlus from '../../../assets/profilePageImages/google-plus.svg'
import FaceBook from '../../../assets/profilePageImages/fb-icon.svg'
import Twitter from '../../../assets/profilePageImages/twitter-icon.svg'
import FingerprintIcon from '../../../assets/profilePageImages/finger-print-icon.jpg'
import QRIcon from '../../../assets/profilePageImages/qr-icon.jpg'
import FaceIdIcon from '../../../assets/profilePageImages/face-id-icon.jpg'
import CheckBoxIcon from '../../../assets/profilePageImages/checkbox-icon.svg'

const ProfileDetails = () => {
    return (
        <div className={styles.ProfileDetails}>
            <div className={styles.ProfileHeading}>
                <span className={styles.ProfileHeadingText}>My Profile</span>
                <span className={styles.EditText}><img className={styles.EditImage} src={Edit} alt="edit image"/> Edit</span>
            </div>
            <div className={styles.NameAndPicture}>
                <h2 className={styles.Heading}>Sarah William</h2>
                <div className={styles.PictureAndNick}>
                    <img src={ProfileImage} alt="profile image"/>
                    <span className={styles.NickNameLabel}>Nick Name:</span>
                    <span className={styles.NickName}>Sarah</span>
                </div>
            </div>
            <div className={styles.ContactInformationDiv}>
                <h2 className={styles.Heading}>Contact Information</h2>
                <div className={styles.ProfileDiv}>
                    <span className={styles.ProfileDivLabel}>Mailing Address:</span>
                    <span className={styles.ProfileDivContent}>1234 No Name St</span>
                </div>
                <div className={styles.ProfileDiv}>
                    <span className={styles.ProfileDivLabel}>Email Address:</span>
                    <span className={styles.ProfileDivContent}>sarahwilliam@gmail.com</span>
                </div>
                <div className={styles.ProfileDiv}>
                    <span className={styles.ProfileDivLabel}>Mobile Phone:</span>
                    <span className={styles.ProfileDivContent}>123-456-7890</span>
                </div>
            </div>
            <div className={styles.PersonalInformationDiv}>
                <h2 className={styles.Heading}>Personal Information</h2>
                <div className={styles.ProfileDiv}>
                    <span className={styles.ProfileDivLabel}>Birth Date:</span>
                    <span className={styles.ProfileDivContent}>January 1st</span>
                </div>
                <div className={styles.ProfileDiv}>
                    <span className={styles.ProfileDivLabel}>Gender:</span>
                    <span className={styles.ProfileDivContent}>Female</span>
                </div>
            </div>
            <div className={styles.EducationalInformationDiv}>
                <h2 className={styles.Heading}>Educational Information</h2>
                <div className={styles.ProfileDiv}>
                    <span className={styles.ProfileDivLabel}>Board/University:</span>
                    <span className={styles.ProfileDivContent}>Rajsthan Technical University, Kota</span>
                </div>
                <div className={styles.ProfileDiv}>
                    <span className={styles.ProfileDivLabel}>Major:</span>
                    <span className={styles.ProfileDivContent}>Computer Science</span>
                </div>
                <div className={styles.ProfileDiv}>
                    <span className={styles.ProfileDivLabel}>Position:</span>
                    <span className={styles.ProfileDivContent}>Instructor</span>
                </div>
            </div>
            <div className={styles.SocialNetworkDiv}>
                <h2 className={styles.Heading}>Social Networks</h2>
                <button className={styles.SocialLinkButton} id={styles.LinkedIn}>
                    <span className={styles.SocialLinkButtonIcon}>
                        <i className="fab fa-linkedin-in"></i>
                    </span>
                    <span className={styles.SocialLinkButtonContent}>LinkedIn</span>
                </button>
                <button className={styles.SocialLinkButton} id={styles.GooglePlus}>
                    <span className={styles.SocialLinkButtonIcon}>
                        <img src={GooglePlus} alt="Google Plus Logo"/>
                    </span>
                    <span className={styles.SocialLinkButtonContent}>Google +</span>
                </button>
                <button className={styles.SocialLinkButton} id={styles.FaceBook}>
                    <span className={styles.SocialLinkButtonIcon}>
                        <img src={FaceBook} alt="FaceBook logo"/>
                    </span>
                    <span className={styles.SocialLinkButtonContent}>FaceBook</span>
                </button>
                <button className={styles.SocialLinkButton} id={styles.Instagram}>
                    <span className={styles.SocialLinkButtonIcon}>
                        <i className="fab fa-instagram"></i>
                    </span>
                    <span className={styles.SocialLinkButtonContent}>Instagram</span>
                </button>
                <button className={styles.SocialLinkButton} id={styles.Twitter}>
                    <span className={styles.SocialLinkButtonIcon}>
                        <img src={Twitter} alt="Twitter logo"/>
                    </span>
                    <span className={styles.SocialLinkButtonContent}>Twitter</span>
                </button>
            </div>
            <div className={styles.SignInInformationDiv}>
                <h2 className={styles.Heading}>Sign In Information</h2>
                <div className={styles.ProfileDiv}>
                    <span className={styles.ProfileDivLabel}>Fingerprint:</span>
                    <div className={`${styles.ProfileDivContent} ${styles.SignInDivContent}`}>
                        <div className={styles.SignInMethod}>
                            <div className={styles.SignInMethodInnerDiv}>
                                <img src={FingerprintIcon} alt="finger print" />
                            </div>
                            <span>Fingerprint</span>
                        </div>                        
                        <img className={styles.CheckBoxIcon} src={CheckBoxIcon} alt="checkbox icon" />
                    </div>
                </div>
                <div className={styles.ProfileDiv}>
                    <span className={styles.ProfileDivLabel}>Face ID:</span>
                    <div className={`${styles.ProfileDivContent} ${styles.SignInDivContent}`}>
                        <div className={styles.SignInMethod}>
                            <div className={styles.SignInMethodInnerDiv}>
                                <img src={FaceIdIcon} alt="face id icon" />
                            </div>
                            <span>Face ID</span>
                        </div>
                        <img className={styles.CheckBoxIcon} src={CheckBoxIcon} alt="checkbox icon" />
                    </div>
                </div>
                <div className={styles.ProfileDiv}>
                    <span className={styles.ProfileDivLabel}>QR Code:</span>
                    <div className={`${styles.ProfileDivContent} ${styles.SignInDivContent}`}>
                        <div className={styles.SignInMethod}>
                            <div className={styles.SignInMethodInnerDiv}>
                                <img src={QRIcon} alt="qr code icon" />
                            </div>
                            <span>QR Code</span>
                        </div>
                        <img className={styles.CheckBoxIcon} src={CheckBoxIcon} alt="checkbox icon" />
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default ProfileDetails
