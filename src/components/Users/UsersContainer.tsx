import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { getUsersThunkAction, unfollowSuccessThunkAction, followSuccessThunkAction, FilterType } from '../../redux/users-reducer';
import { UserType } from '../../types/types';
import Preloader from '../common/preloader/preloader';
import { Users } from './Users';
import { getCurrentPage, getFetching, getFollowingProgress, getPageSize, getPortionUsers, getUsers, getUsersCounts, getUsersFilter, getUsersSelector } from './UsersSelectors';
import { useSelector } from 'react-redux'


type UsersPagePropsType = {
    pageTitle: string
}

export const UsersPage: React.FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getFetching)
    return <>
        <h2>{props.pageTitle}</h2>
        {isFetching ? <Preloader /> : null}
        <Users />
    </>
}

// class UsersContainer extends React.Component<PropsType> {

//     componentDidMount() {
//         this.props.getUsersThunkAction(this.props.currentPage, this.props.pageSize, this.props.filter)
//     }




//     render() {
//         return (
//             <>
//                 <h2>{this.props.pageTitle}</h2>
//                 {this.props.isFetching ? <Preloader /> : null}
//                 <Users
                // usersCounts={this.props.usersCounts}
                // pageSize={this.props.pageSize}
                // currentPage={this.props.currentPage}
                // onPageChanged={this.onPageChanged}
                // users={this.props.users}
                // onFilterChanged={this.onFilterChanged}
                // follow={this.props.follow}
                // unfollow={this.props.unfollow}
                // isFollowingProgress={this.props.isFollowingProgress}
                // toggleFollowingProgress={this.props.toggleFollowingProgress}
                // unfollowSuccessThunkAction={this.props.unfollowSuccessThunkAction}
                // followSuccessThunkAction={this.props.followSuccessThunkAction}
                // portionUsers={this.props.portionUsers}
//                 />
//             </>
//         )
//     }
// }

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


// const mapStateToProps = (state: AppStateType): MapStatePropsType => {
//     return {
//         users: getUsersSelector(state),
//         pageSize: getPageSize(state),
//         usersCounts: getUsersCounts(state),
//         currentPage: getCurrentPage(state),
//         isFetching: getFetching(state),
//         isFollowingProgress: getFollowingProgress(state),
//         portionUsers: getPortionUsers(state),
//         filter: getUsersFilter(state)
//     }
// }

//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState из дженериков
// export default compose(
//     connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
//         (mapStateToProps,
//             {
//                 // follow,
//                 // unfollow,
//                 // toggleFollowingProgress,
//                 getUsersThunkAction,
//                 unfollowSuccessThunkAction,
//                 followSuccessThunkAction
//             }))
//     (UsersContainer)