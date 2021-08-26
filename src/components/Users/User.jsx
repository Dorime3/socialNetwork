import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css'
import userPhoto from '../../assets/img/user.png';


const User = (props) => {
    const { id, photos, name, status, followed, unfollowSuccessThunkAction, followSuccessThunkAction, isFollowingProgress } = props;
    return (
        <div key={id} className={s.person}>
            <NavLink to={'/profile/' + id}>
                <img src={photos.small ? photos.small : userPhoto} alt='persons photos' />
            </NavLink>
            <div>{followed
                ? <button disabled={isFollowingProgress.some(el => el === id)} onClick={() => {
                    unfollowSuccessThunkAction(id)
                }
                }>Unfollow</button>
                : <button disabled={isFollowingProgress.some(el => el === id)} onClick={() => {
                    followSuccessThunkAction(id)
                }
                }>Follow</button>}
            </div>
            <div>{name}</div>
            <div>{status}</div>
            <div>country</div>
            <div>city</div>
        </div>
    )
}

export default User;