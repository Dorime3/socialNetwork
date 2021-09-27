import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar: React.FC = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/#'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/#'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/#'>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='#' >Friends</NavLink>
            </div>
        </nav>
    )
}



export default Navbar;