//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         usersCounts: state.usersPage.usersCounts,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowingProgress: state.usersPage.isFollowingProgress

export const getUsers = (state) => {
    return state.usersPage.users
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getUsersCounts = (state) => {
    return state.usersPage.usersCounts
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingProgress = (state) => {
    return state.usersPage.isFollowingProgress
}