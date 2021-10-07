import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
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
    // userProfileThunkCreator: (userId: number | null) => void,
    // getUserStatus: (userId: number | null) => void,
    // updateStatus: (status: string) => void,
    // uploadPhoto: (file: File) => void,
    // saveForm: (formData: ProfileType) => Promise<any>
}
type PathParamsType = {
    userId: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>
// type PropsType = RouteComponentProps & MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const ProfileContainer: React.FC<PropsType> = (props) => {
    const authorizedUserId = useSelector((state: AppStateType) => state.auth.userId);
    const dispatch = useDispatch()
    const getProfile = () => {
        const { match, history } = props

        let userId: number | null = +match.params.userId;
        if (!userId) {
            userId = authorizedUserId
            if (!userId) {
                history.push('/auth')
            }
        }
        dispatch(userProfileThunkCreator(userId));
        dispatch(getUserStatus(userId))
    }

    useEffect(() => {
        getProfile();
    }, [])

    useEffect(() => {
        getProfile();
    }, [props.match.params.userId])

    return (
        <Profile
            // profile={props.profile}
            // status={props.status}
            // globalError={props.globalError}
            // updateStatus={props.updateStatus}
            isOwner={+props.match.params.userId}
        // uploadPhoto={props.uploadPhoto}
        // saveForm={props.saveForm}
        />
    )
}




export default compose<React.ComponentType>(
    withRouter)
    (ProfileContainer)