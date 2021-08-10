import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://logonoid.com/images/human-rights-logo.png' />
            <div className={s.login}>
                {props.data.auth
                    ? <div><a href='#'>{props.data.email}</a> <button onClick={props.logoutMe}>Logout</button> </div>
                    : <NavLink to='/auth'>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;