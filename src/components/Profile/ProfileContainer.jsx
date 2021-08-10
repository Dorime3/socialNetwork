import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { userProfileThunkCreator, getUserStatus, updateStatus } from '../../redux/profile-reducer'
import { Redirect, withRouter } from 'react-router-dom';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import Preloader from '../common/preloader/preloader';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/auth')
            }
        }
        this.props.userProfileThunkCreator(userId);
        this.props.getUserStatus(userId)
    }

    render() {
        // if (!this.props.match.params.userId) return <Redirect to='/auth' />

        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.userProfile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
})


export default compose(
    connect(mapStateToProps, { userProfileThunkCreator, getUserStatus, updateStatus }),
    withRouter)
    (ProfileContainer)