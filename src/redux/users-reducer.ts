import { PhotosType, UserType } from './../types/types';
import { UsersApi } from "../components/api/UsersApi";
import { Dispatch } from 'react';
import { AppStateType, BaseThunkType, InferActionsTypes } from './redux-store';
import { ThunkAction } from 'redux-thunk';
import { APIResponseType } from '../components/api/requestsAPI';


const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    portionUsers: 25,
    usersCounts: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: [] as Array<number>, // array of users ids
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'users/FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case 'users/UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case 'users/SET_USERS': {
            return { ...state, users: [...action.users] }
        }
        case 'users/SET_CURRENT_PAGE': {
            return { ...state, currentPage: action.currentPage }
        }
        case 'users/USERS_COUNTS': {
            return { ...state, usersCounts: action.usersCounts }
        }
        case 'users/TOGGLE_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching }
        }
        case 'users/SET_FILTER': {
            return { ...state, filter: action.payload }
        }
        case 'users/TOGGLE_FOLLOWING_PROGRESS': {
            return {
                ...state,
                isFollowingProgress: action.isFetching
                    ? [...state.isFollowingProgress, action.id]
                    : state.isFollowingProgress.filter(id => id !== action.id)
            }
        }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    follow: (id: number) => {
        return {
            type: 'users/FOLLOW',
            id: id
        } as const
    },
    unfollow: (id: number) => {
        return {
            type: 'users/UNFOLLOW',
            id: id
        } as const
    },
    setUsers: (users: Array<UserType>) => {
        return {
            type: 'users/SET_USERS',
            users: users
        } as const
    },
    setCurrentPage: (page: number) => {
        return {
            type: 'users/SET_CURRENT_PAGE',
            currentPage: page
        } as const
    },
    setUsersCounts: (usersNumber: number) => {
        return {
            type: 'users/USERS_COUNTS',
            usersCounts: usersNumber
        } as const
    },
    setFilter: (filter: FilterType) => {
        return {
            type: 'users/SET_FILTER',
            payload: filter
        } as const
    },
    toggleIsFetching: (isFetching: boolean) => {
        return {
            type: 'users/TOGGLE_IS_FETCHING',
            isFetching
        } as const
    },
    toggleFollowingProgress: (isFetching: boolean, id: number) => {
        return {
            type: 'users/TOGGLE_FOLLOWING_PROGRESS',
            isFetching,
            id
        } as const
    }
}


type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = BaseThunkType<ActionsTypes>;


export const getUsersThunkAction = (page: number, pageSize: number, filter: FilterType): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page));
        dispatch(actions.setFilter(filter));
        const data = await UsersApi.getUsers(page, pageSize, filter.term, filter.friend)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setUsersCounts(data.totalCount))
    }
}

const followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: (userId: number) => Promise<APIResponseType>, actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actions.toggleFollowingProgress(false, userId))
        dispatch(actionCreator(userId))
    }
}


export const unfollowSuccessThunkAction = (userId: number): ThunkType => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, UsersApi.userUnfollow, actions.unfollow)
    }
}
export const followSuccessThunkAction = (userId: number): ThunkType => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, UsersApi.userFollow, actions.follow)
    }
}



export default usersReducer;