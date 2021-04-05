import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './ProfileDetails.module.scss'
import Edit from 'assets/profilePageImages/edit-1.svg'
import NameAndPicture from '../name-and-picture/NameAndPicture'
import ContactInformation from '../contact-information-profile/ContactInformationProfile'
import PersonalInformation from '../personal-information-profile/PersonalInformationProfile'
import EducationInformation from '../education-information/EducationInformationProfile'
import SocialNetworkProfile from '../social-network-profile/SocialNetworkProfile'
import SignInInformationProfile from '../signin-information-profile/SignInInformationProfile'

const ProfileDetails = () => {
    const location = useLocation();

    return (
        <div className={styles.ProfileDetails}>
            <div className={styles.ProfileHeading}>
                <span className={styles.ProfileHeadingText}>My Profile</span>
                <Link className={styles.EditText} to={`${location.pathname}?type=edit`}>
                    <img className={styles.EditImage} src={Edit} alt="edit image" /> Edit
                </Link>
            </div>
            <NameAndPicture />
            <ContactInformation />
            <PersonalInformation />
            <EducationInformation />
            <SocialNetworkProfile />
            <SignInInformationProfile />
        </div>
    )
}

export default ProfileDetails
