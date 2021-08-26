import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { follow, unfollow, toggleFollowingProgress, getUsersThunkAction, followSuccessThunkAction, unfollowSuccessThunkAction } from '../../redux/users-reducer';
import Preloader from '../common/preloader/preloader';
import Users from './Users';
import { getCurrentPage, getFetching, getFollowingProgress, getPageSize, getPortionUsers, getUsers, getUsersCounts, getUsersSelector } from './UsersSelectors';

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkAction(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkAction(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    usersCounts={this.props.usersCounts}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    isFollowingProgress={this.props.isFollowingProgress}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
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


const mapStateToProps = (state) => {
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

export default compose(connect(mapStateToProps,
    {
        follow,
        unfollow,
        toggleFollowingProgress,
        getUsersThunkAction,
        unfollowSuccessThunkAction,
        followSuccessThunkAction
    }))
    (UsersAPI)