import React from 'react';
import Friend from './Friend/Friend';
import s from './Friend/Friend.module.css';

const Friends = (props) => {
    const friend = props.friends.map(f => <Friend name={f.name} avatar={f.avatar} />)
    return (
        <div className={s.friendsBlock}>
            {friend}
        </div>
    )
}

export default Friends;