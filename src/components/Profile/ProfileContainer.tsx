import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { userProfileThunkCreator, getUserStatus, updateStatus, uploadPhoto, saveForm } from '../../redux/profile-reducer'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { PhotosType, ProfileType } from '../../types/types';

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.userProfile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    globalError: state.app.globalError
})

type MapStatePropsType = ReturnType<typeof mapStateToProps>
// type MapStatePropsType = {
//     profile: ProfileType | null,
//     authorizedUserId: number | null,
//     status: string | null,
//     globalError: string | null
// }
type MapDispatchPropsType = {
    userProfileThunkCreator: (userId: number | null) => void,
    getUserStatus: (userId: number | null) => void,
    updateStatus: (status: string) => void,
    uploadPhoto: (file: File) => void,
    saveForm: (formData: ProfileType) => Promise<any>
}
type PathParamsType = {
    userId: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>
// type PropsType = RouteComponentProps & MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class ProfileContainer extends React.Component<PropsType> {
    getProfile() {
        const { match, authorizedUserId, history, userProfileThunkCreator, getUserStatus } = this.props

        let userId: number | null = +match.params.userId;
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
    componentDidUpdate(prevProps: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.getProfile();
        }
    }
    render() {

        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                globalError={this.props.globalError}
                updateStatus={this.props.updateStatus}
                isOwner={+this.props.match.params.userId}
                uploadPhoto={this.props.uploadPhoto}
                saveForm={this.props.saveForm}
            />
        )
    }
}




export default compose<React.ComponentType>(
    connect(mapStateToProps, { userProfileThunkCreator, getUserStatus, updateStatus, uploadPhoto, saveForm }),
    withRouter)
    (ProfileContainer)