import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/preloader/preloader';
import { PhotosType, ProfileType } from '../../types/types';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';


type PropsType = {
  // profile: ProfileType | null,
  // status: string,
  // globalError: string | null
  // updateStatus: (status: string) => void,
  isOwner: number | null,//???
  // uploadPhoto: (file: File) => void,
  // saveForm: (FormData: ProfileType) => Promise<any>
}

const Profile: React.FC<PropsType> = (props) => {

  const profile = useSelector((state: AppStateType) => state.profilePage.userProfile)


  if (!profile) {
    return (<Preloader />)
  }
  return (
    <div>
      <ProfileInfo
        profile={profile}
        // status={status}
        // globalError={globalError}
        // updateStatus={props.updateStatus}
        isOwner={!props.isOwner}
      // uploadPhoto={props.uploadPhoto}
      // saveForm={props.saveForm} 
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;