//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         usersCounts: state.usersPage.usersCounts,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowingProgress: state.usersPage.isFollowingProgress

import { createSelector } from "reselect"
import { AppStateType } from "../../redux/redux-store"

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getPortionUsers = (state: AppStateType) => {
    return state.usersPage.portionUsers
}
export const getUsersCounts = (state: AppStateType) => {
    return state.usersPage.usersCounts
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingProgress = (state: AppStateType) => {
    return state.usersPage.isFollowingProgress
}
export const getUsersFilter = (state: AppStateType) => {
    return state.usersPage.filter
}