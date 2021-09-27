import React, { ChangeEvent, useState } from 'react';
import s from './ProfileInfo.module.css'
import defaultPicture from '../../../assets/img/user.png'
import ProfileStatus from './ProfileStatus'
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';
import ProfileData from './ProfileData';
import ReduxProfileDataForm from './ProfileDataForm';
import { ProfileType } from '../../../types/types';

type PropsType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    globalError: string | null,
    uploadPhoto: (file: File) => void,
    saveForm: (formData: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = (props) => {
    const onUploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.uploadPhoto(e.target.files[0])
        }
    }
    const [editMode, setEditMode] = useState(false)
    const toEditMode = () => {
        setEditMode(true);
    }

    const onSubmit = (formData: ProfileType) => {
        // todo: remove then
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
                {props.globalError && <div>{props.globalError}</div>}
            </div>
            {editMode
                ? <ReduxProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile} isOwner={props.isOwner} />
                : <ProfileData profile={props.profile} isOwner={props.isOwner} toEditMode={toEditMode} />
            }
        </div >
    )
}



export default ProfileInfo;