import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutMe } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';
import Header, { MapDispatchPropsType, MapStatePropsType } from './Header';


class HeaderContainer extends React.Component<MapStatePropsType & MapDispatchPropsType> {
    render() {
        // if (!this.props.data.isAuth) { <Redirect to='/auth' /> }
        return (
            <Header {...this.props} />
        )
    }
}
const mapStateToProps = (state: AppStateType) => ({
    auth: state.auth.auth,
    email: state.auth.email
})

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, { logoutMe })(HeaderContainer);