import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { getUsersThunkAction, followSuccessThunkAction, unfollowSuccessThunkAction } from '../../redux/users-reducer';
import { UserType } from '../../types/types';
import Preloader from '../common/preloader/preloader';
import Users from './Users';
import { getCurrentPage, getFetching, getFollowingProgress, getPageSize, getPortionUsers, getUsers, getUsersCounts, getUsersSelector } from './UsersSelectors';

type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
    usersCounts: number,
    users: Array<UserType>,
    portionUsers: number,
    isFollowingProgress: Array<number>
}
type MapDispatchPropsType = {
    unfollowSuccessThunkAction: (userId: number) => void,
    followSuccessThunkAction: (userId: number) => void,
    getUsersThunkAction: (currentPage: number, pageSize: number) => void
}
type OwnPropsType = {
    pageTitle: string
}



type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsersThunkAction(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkAction(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                <h2>{this.props.pageTitle}</h2>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    usersCounts={this.props.usersCounts}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    // follow={this.props.follow}
                    // unfollow={this.props.unfollow}
                    isFollowingProgress={this.props.isFollowingProgress}
                    // toggleFollowingProgress={this.props.toggleFollowingProgress}
                    unfollowSuccessThunkAction={this.props.unfollowSuccessThunkAction}
                    followSuccessThunkAction={this.props.followSuccessThunkAction}
                    portionUsers={this.props.portionUsers}
                />
            </>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         usersCounts: state.usersPage.usersCounts,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowingProgress: state.usersPage.isFollowingProgress
//     }
// }


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        usersCounts: getUsersCounts(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetching(state),
        isFollowingProgress: getFollowingProgress(state),
        portionUsers: getPortionUsers(state)
    }
}

//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState из дженериков
export default compose(connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps,
        {
            // follow,
            // unfollow,
            // toggleFollowingProgress,
            getUsersThunkAction,
            unfollowSuccessThunkAction,
            followSuccessThunkAction
        }))
    (UsersContainer)