import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

export type MapStatePropsType = {
    auth: boolean,
    email: string | null
}
export type MapDispatchPropsType = {
    logoutMe: () => void
}

const Header: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src='https://logonoid.com/images/human-rights-logo.png' />
            <div className={s.login}>
                {props.auth
                    ? <div><a href='#'>{props.email}</a> <button onClick={props.logoutMe}>Logout</button> </div>
                    : <NavLink to='/auth'>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;