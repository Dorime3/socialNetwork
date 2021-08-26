import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { userProfileThunkCreator, getUserStatus, updateStatus, uploadPhoto, saveForm } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    getProfile() {
        const { match, authorizedUserId, history, userProfileThunkCreator, getUserStatus } = this.props

        let userId = match.params.userId;
        if (!userId) {
            userId = authorizedUserId
            if (!userId) {
                history.push('/auth')
            }
        }
        userProfileThunkCreator(userId);
        getUserStatus(userId)
    }
    componentDidMount() {
        this.getProfile();
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.getProfile();
        }
    }
    render() {

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
    connect(mapStateToProps, { userProfileThunkCreator, getUserStatus, updateStatus, uploadPhoto, saveForm }),
    withRouter)
    (ProfileContainer)