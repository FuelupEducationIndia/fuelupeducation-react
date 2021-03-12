import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Input from '../input/Input'

import styles from './ProfileEdit.module.scss'
import PersonImg from 'assets/profilePageImages/person-img.png'
import SelectDropDown from '../select-dropdown/SelectDropDown'
import { months, theDates } from '../../../constantData/monthsAndDates'
import SignInInformationProfile from '../signin-information-profile/SignInInformationProfile'

const ProfileEdit = () => {
    const methods = useForm()
    const onFormSubmit = data => console.log(data)
    return (
        <div className={styles.ProfileEditDiv}>
            <div className={styles.ProfileHeading}>
                <span className={styles.ProfileHeadingText}>My Profile</span>
            </div>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onFormSubmit)}>
                    <div className={styles.NickNameFormEdit}>
                        <h2 className={styles.Heading}>LastNameFirstName</h2>
                        <div className={styles.NickNameFormDiv}>
                            <div className={styles.ImageAndNick}>
                                <div className={styles.ImageDiv}>
                                    <img src={PersonImg} alt="person image icon" />
                                    <span id={styles.ChangeImage}>Change</span>
                                </div>
                                <span className={styles.NickNameInputLabel}>Nick Name</span>
                                {/* <div className={styles.PhotoOptions}>
                                    <span>Take photo</span>
                                    <span>Upload photo</span>
                                    <span>Remove photo</span>
                                </div> */}
                            </div>
                            <Input
                                name="nickname"
                                type="text"
                                labelInputId="nickName"
                                classNameProps={styles.ProfileEditInput}
                                inputDivClassNameProps={styles.InputDivEditProfile}
                                required
                            />
                            {methods.errors.email && (
                                <span className={styles.Error}>
                                    Nick Name Field Is Required
                                </span>
                            )}
                        </div>
                    </div>
                    <div className={styles.InformationFormEdit}>
                        <h2 className={styles.Heading}>Contact Information</h2>
                        <div className={styles.EditProfileForm}>
                            <span className={styles.EditProfileFormLabel}>Mailing Address<span className={styles.AsteriskInput} /></span>
                            <Input
                                name="mailing_address"
                                type="text"
                                labelInputId="mailingAddress"
                                classNameProps={styles.ProfileEditInput}
                                inputDivClassNameProps={styles.EditProfileFormContent}
                                required
                            />
                        </div>
                        <div className={styles.EditProfileForm}>
                            <span className={styles.EditProfileFormLabel}>Email Address<span className={styles.AsteriskInput} /></span>
                            <Input
                                name="email_address"
                                type="email"
                                labelInputId="emailAddress"
                                classNameProps={styles.ProfileEditInput}
                                inputDivClassNameProps={styles.EditProfileFormContent}
                                required
                            />
                        </div>
                        <div className={styles.EditProfileForm}>
                            <span className={styles.EditProfileFormLabel}>Mobile Phone<span className={styles.AsteriskInput} /></span>
                            <Input
                                name="mobile_phone"
                                type="number"
                                labelInputId="mobilePhone"
                                classNameProps={styles.ProfileEditInput}
                                inputDivClassNameProps={styles.EditProfileFormContent}
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.InformationFormEdit}>
                        <h2 className={styles.Heading}>Personal Information</h2>
                        <div className={styles.EditProfileForm}>
                            <span className={styles.EditProfileFormLabel}>Birth Date<span className={styles.AsteriskInput} /></span>
                            <div className={styles.MonthAndDate}>
                                <SelectDropDown
                                    name="month"
                                    defaultValue="Select a month"
                                    otherValues={months}
                                    selectDropDownDivStyle={styles.SelectDivProfileEdit}
                                    classNameProps={styles.ProfileEditSelect}
                                    required
                                    caretSelectStyle={styles.CaretSelectEdit}
                                />
                                <SelectDropDown
                                    name="day"
                                    defaultValue="Select a day"
                                    otherValues={theDates}
                                    selectDropDownDivStyle={styles.SelectDivProfileEdit}
                                    classNameProps={styles.ProfileEditSelect}
                                    required
                                    caretSelectStyle={styles.CaretSelectEdit}
                                />
                            </div>
                        </div>
                        <div className={styles.EditProfileForm}>
                            <span className={styles.EditProfileFormLabel}>Gender<span className={styles.AsteriskInput} /></span>
                            <SelectDropDown
                                name="gender"
                                defaultValue="Select a gender"
                                otherValues={['male', 'female']}
                                selectDropDownDivStyle={styles.SelectDivProfileEdit}
                                classNameProps={styles.ProfileEditSelect}
                                required
                                caretSelectStyle={styles.CaretSelectEdit}
                            />
                        </div>
                    </div>
                    <div className={styles.InformationFormEdit}>
                        <h2 className={styles.Heading}>Educational Information</h2>
                        <div className={styles.EditProfileForm}>
                            <span className={styles.EditProfileFormLabel}>Board/University<span className={styles.AsteriskInput} /></span>
                            <Input
                                name="board/university"
                                type="text"
                                labelInputId="boardUniversity"
                                classNameProps={styles.ProfileEditInput}
                                inputDivClassNameProps={styles.EditProfileFormContent}
                                required
                            />
                        </div>
                        <div className={styles.EditProfileForm}>
                            <span className={styles.EditProfileFormLabel}>Major<span className={styles.AsteriskInput} /></span>
                            <Input
                                name="major"
                                type="text"
                                labelInputId="major"
                                classNameProps={styles.ProfileEditInput}
                                inputDivClassNameProps={styles.EditProfileFormContent}
                                required
                            />
                        </div>
                        <div className={styles.EditProfileForm}>
                            <span className={styles.EditProfileFormLabel}>Position<span className={styles.AsteriskInput} /></span>
                            <Input
                                name="position"
                                type="text"
                                labelInputId="position"
                                classNameProps={styles.ProfileEditInput}
                                inputDivClassNameProps={styles.EditProfileFormContent}
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.SocialNetworkFormEdit}>
                        <h2 className={styles.Heading}>Social Networks</h2>
                        <div className={styles.EditProfileForm}>
                            <span className={styles.EditProfileFormLabel}>LinkedIn</span>
                            <Input
                                name="linkedin"
                                type="text"
                                labelInputId="linkedin"
                                classNameProps={styles.ProfileEditInput}
                                inputDivClassNameProps={styles.EditProfileFormContent}
                                required
                            />
                        </div>
                        <div className={styles.EditProfileForm}>
                            <span className={styles.EditProfileFormLabel}>Google</span>
                            <Input
                                name="google"
                                type="text"
                                labelInputId="google"
                                classNameProps={styles.ProfileEditInput}
                                inputDivClassNameProps={styles.EditProfileFormContent}
                                required
                            />
                        </div>
                        <div className={styles.EditProfileForm}>
                            <span className={styles.EditProfileFormLabel}>Facebook</span>
                            <Input
                                name="facebook"
                                type="text"
                                labelInputId="facebook"
                                classNameProps={styles.ProfileEditInput}
                                inputDivClassNameProps={styles.EditProfileFormContent}
                                required
                            />
                        </div>
                        <div className={styles.EditProfileForm}>
                            <span className={styles.EditProfileFormLabel}>Instagram</span>
                            <Input
                                name="instagram"
                                type="text"
                                labelInputId="instagram"
                                classNameProps={styles.ProfileEditInput}
                                inputDivClassNameProps={styles.EditProfileFormContent}
                                required
                            />
                        </div>
                        <div className={styles.EditProfileForm}>
                            <span className={styles.EditProfileFormLabel}>Twitter</span>
                            <Input
                                name="twitter"
                                type="text"
                                labelInputId="twitter"
                                classNameProps={styles.ProfileEditInput}
                                inputDivClassNameProps={styles.EditProfileFormContent}
                                required
                            />
                        </div>
                    </div>
                    <SignInInformationProfile />
                    <input
                        type="submit"
                        className={styles.UpdateBtn}
                        value="Update"
                    />
                </form>
            </FormProvider>
        </div>
    )
}

export default ProfileEdit
