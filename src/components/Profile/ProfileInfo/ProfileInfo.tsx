import React, { ChangeEvent, useState } from 'react';
import s from './ProfileInfo.module.css'
import defaultPicture from '../../../assets/img/user.png'
import ProfileStatus from './ProfileStatus'
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';
import ProfileData from './ProfileData';
import ReduxProfileDataForm from './ProfileDataForm';
import { ProfileType } from '../../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { saveForm, uploadPhoto } from '../../../redux/profile-reducer';

type PropsType = {
    profile: ProfileType,
    //     status: string,
    // updateStatus: (status: string) => void,
    isOwner: boolean,
    // globalError: string | null,
    // uploadPhoto: (file: File) => void,
    // saveForm: (formData: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = (props) => {
    const status = useSelector((state: AppStateType) => state.profilePage.status)
    // const authorizedUserId = useSelector((state: AppStateType) => state.auth.userId)
    const globalError = useSelector((state: AppStateType) => state.app.globalError)
    const dispatch = useDispatch();


    const onUploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            dispatch(uploadPhoto(e.target.files[0]))
        }
    }
    const [editMode, setEditMode] = useState(false)
    const toEditMode = () => {
        setEditMode(true);
    }

    const onSubmit = (formData: ProfileType) => {
        // todo: remove then
        dispatch(saveForm(formData))
        // .then(() => {
        setEditMode(false);
        // })
    }
    return (
        <div>
            {/* <div className={s.head}>
            </div> */}
            <div className={s.avatar}>
                <img alt='avatar' src={props.profile.photos.large ? props.profile.photos.large : defaultPicture} />
                {props.isOwner && <input type='file' onChange={onUploadPhoto} />}
                <ProfileStatusWithHooks status={status} />
                {globalError && <div>{globalError}</div>}
            </div>
            {editMode
                ? <ReduxProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile} isOwner={props.isOwner} />
                : <ProfileData profile={props.profile} isOwner={props.isOwner} toEditMode={toEditMode} />
            }
        </div >
    )
}



export default ProfileInfo;