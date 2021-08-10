import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={s.friendItem}>
            <img src={props.avatar} alt='ava' />
            <a>{props.name}</a>
        </div>
    )
}

export default Friend;