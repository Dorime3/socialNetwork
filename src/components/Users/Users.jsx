import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/img/user.png';
import { NavLink } from 'react-router-dom';


const Users = (props) => {
    let pagesCount = Math.ceil(props.usersCounts / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div >
            <div>
                {pages.map(p => {
                    if (p > 0) {
                        return (
                            <span onClick={() => props.onPageChanged(p)} className={p === props.currentPage ? s.selectedPage : ''}>
                                {p + ' '}
                            </span>
                        )
                    }
                })}
            </div>
            {props.users.map(u => {
                return (
                    <div key={u.id} className={s.person}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small ? u.photos.small : userPhoto} alt='persons photos' />
                        </NavLink>
                        <div>{u.followed
                            ? <button disabled={props.isFollowingProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollowSuccessThunkAction(u.id)
                            }
                            }>Unfollow</button>
                            : <button disabled={props.isFollowingProgress.some(id => id === u.id)} onClick={() => {
                                props.followSuccessThunkAction(u.id)
                            }
                            }>Follow</button>}
                        </div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>country</div>
                        <div>city</div>
                    </div>
                )
            })}
        </div>

    )
}

export default Users;