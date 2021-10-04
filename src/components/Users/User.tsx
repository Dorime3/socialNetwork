import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css'
import userPhoto from '../../assets/img/user.png';
import { PhotosType, UserType } from '../../types/types';

type PropsType = {
    user: UserType,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void,
    isFollowingProgress: Array<number>,
}

const User: React.FC<PropsType> = (props) => {
    const { user, unfollow, follow, isFollowingProgress } = props;
    return (
        <div key={user.id} className={s.person}>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small ? user.photos.small : userPhoto} alt='persons photos' />
            </NavLink>
            <div>{user.followed
                ? <button disabled={isFollowingProgress.some(el => el === user.id)} onClick={() => {
                    unfollow(user.id)
                }
                }>Unfollow</button>
                : <button disabled={isFollowingProgress.some(el => el === user.id)} onClick={() => {
                    follow(user.id)
                }
                }>Follow</button>}
            </div>
            <div>{user.name}</div>
            <div>{user.status}</div>
            <div>country</div>
            <div>city</div>
        </div>
    )
}

export default User;