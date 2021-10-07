//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         usersCounts: state.usersPage.usersCounts,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowingProgress: state.usersPage.isFollowingProgress

import { AppStateType } from "../../redux/redux-store"

export const selectIsAuth = ((state: AppStateType) => {
    return state.auth.auth
})
export const selectCurrentUserLogin = ((state: AppStateType) => {
    return state.auth.login
})