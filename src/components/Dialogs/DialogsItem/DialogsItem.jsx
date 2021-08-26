import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ img, id, name }) => {

    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img src={img} alt='ava' />
            <NavLink to={'/dialogs/' + id} >{name}</NavLink>
        </div>
    )
}

export default DialogItem;