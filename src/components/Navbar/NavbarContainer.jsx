import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import Friends from './Friends';
import { connect } from 'react-redux';
import Navbar from './Navbar';



const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;