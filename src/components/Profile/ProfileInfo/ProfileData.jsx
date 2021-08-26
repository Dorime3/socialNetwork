import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileData = ({ profile, isOwner, toEditMode }) => {
    return (
        <div className={s.profileData}>
            {isOwner && <button onClick={toEditMode}>edit</button>}
            <div>
                <b>Full name:</b> {profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? 'yea' : 'no'}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b>
                    {profile.lookingForAJobDescription}
                </div>}
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(el => {
                    return <Contact key={el} title={el} value={profile.contacts[el]} />
                })}
            </div>
        </div>
    )
}

const Contact = ({ title, value }) => {
    return (
        <div className={s.profileContacts}>
            <b>{title}:</b> {value}
        </div>
    )
}

export default ProfileData;