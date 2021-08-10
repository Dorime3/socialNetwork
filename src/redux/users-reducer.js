import { UsersApi } from "../components/api/requestsAPI";

const initialState = {
    users: [],
    pageSize: 5,
    usersCounts: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case 'SET-USERS': {
            return { ...state, users: [...action.users] }
        }
        case 'SET_CURRENT_PAGE': {
            return { ...state, currentPage: action.currentPage }
        }
        case 'USERS_COUNTS': {
            return { ...state, usersCounts: action.usersCounts }
        }
        case 'TOGGLE_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching }
        }
        case 'TOGGLE_FOLLOWING_PROGRESS': {
            return {
                ...state,
                isFollowingProgress: action.isFetching
                    ? [...state.isFollowingProgress, action.id]
                    : state.isFollowingProgress.filter(id => id != action.id)
            }
        }
        default:
            return state;
    }
}

export const follow = (id) => {
    return {
        type: 'FOLLOW',
        id: id
    }
};

export const unfollow = (id) => {
    return {
        type: 'UNFOLLOW',
        id: id
    }
};

export const setUsers = (users) => {
    return {
        type: 'SET-USERS',
        users: users
    }
}

export const setCurrentPage = (page) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage: page
    }
}
export const setUsersCounts = (usersNumber) => {
    return {
        type: 'USERS_COUNTS',
        usersCounts: usersNumber
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    }
}
export const toggleFollowingProgress = (isFetching, id) => {
    return {
        type: 'TOGGLE_FOLLOWING_PROGRESS',
        isFetching,
        id
    }
}

export const getUsersThunkAction = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        UsersApi.getUsers(page, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items));
                dispatch(setUsersCounts(data.totalCount))
            })
    }
}
export const unfollowSuccessThunkAction = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        UsersApi.userUnfollow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(toggleFollowingProgress(false, userId))
                    dispatch(unfollow(userId))
                }
            })
    }
}
export const followSuccessThunkAction = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        UsersApi.userFollow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(toggleFollowingProgress(false, userId))
                    dispatch(follow(userId))
                }
            })
    }
}



export default usersReducer;