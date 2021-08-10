import React from 'react';
import s from './ProfileInfo.module.css'
import defaultPicture from '../../../assets/img/user.png'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    return (
        <div>
            {/* <div className={s.head}>
            </div> */}
            <div className={s.avatar}>
                <img src={props.profile.photos.large ? props.profile.photos.large : defaultPicture} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
            <div>
                Обо мне: {props.profile.aboutMe}
            </div>
            <div>
                Мои аккаунты в соцсетях:
                <div><a href={`https://${props.profile.contacts.facebook}`} >facebook</a></div>
                <div><a href={`https://${props.profile.contacts.vk}`}> vk</a></div>
                <div><a href={`https://${props.profile.contacts.twitter}`}> twitter</a></div>
                <div><a href={`https://${props.profile.contacts.instagram}`}> instagram</a></div>
                <div><a href={`https://${props.profile.contacts.github}`}> github</a></div>
            </div >
            <div>
                {props.profile.lookingForAJob ? 'Я ищу работу' : 'Я не ищу работу'}
            </div>
        </div >
    )
}

export default ProfileInfo;