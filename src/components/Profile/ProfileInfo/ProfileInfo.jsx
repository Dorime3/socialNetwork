import React, { useState } from 'react';
import s from './ProfileInfo.module.css'
import defaultPicture from '../../../assets/img/user.png'
import ProfileStatus from './ProfileStatus'
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';
import ProfileData from './ProfileData';
import ReduxProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {
    const onUploadPhoto = (e) => {
        if (e.target.files.length) {
            props.uploadPhoto(e.target.files[0])
        }
    }
    const [editMode, setEditMode] = useState(false)
    const toEditMode = () => {
        setEditMode(true);
    }

    const onSubmit = (formData) => {
        props.saveForm(formData).then(() => {
            setEditMode(false);
        })
    }
    return (
        <div>
            {/* <div className={s.head}>
            </div> */}
            <div className={s.avatar}>
                <img alt='avatar' src={props.profile.photos.large ? props.profile.photos.large : defaultPicture} />
                {props.isOwner && <input type='file' onChange={onUploadPhoto} />}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
            {editMode
                ? <ReduxProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile} isOwner={props.isOwner} />
                : <ProfileData profile={props.profile} isOwner={props.isOwner} toEditMode={toEditMode} />
            }
        </div >
    )
}



export default ProfileInfo;