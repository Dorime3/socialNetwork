import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutMe } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {


    render() {
        // if (!this.props.data.isAuth) { <Redirect to='/auth' /> }
        return (
            <Header {...this.props} />
        )
    }
}
const mapStateToProps = (state) => ({
    data: state.auth
})

export default connect(mapStateToProps, { logoutMe })(HeaderContainer);