import { PostType, ProfileType, PhotosType } from './../types/types';
import { FormAction, stopSubmit } from "redux-form";
import { ProfileApi } from "../components/api/ProfileApi";
import { ThunkAction } from 'redux-thunk';
import { AppStateType, BaseThunkType, InferActionsTypes } from './redux-store';
import { Dispatch } from 'react';




const initialState = {
    PostData: [
        { id: 1, message: 'Hi, how are you?', likesCount: '12 likes' },
        { id: 2, message: 'It\'s my first post', likesCount: '0 likes' },
        { id: 3, message: 'Blabla', likesCount: '0 likes' },
        { id: 4, message: 'Blabla', likesCount: '0 likes' }
    ] as Array<PostType>,
    userProfile: null as ProfileType | null,
    status: ''
}
export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'profile/ADD_POST': {
            const newPost = {
                id: 5,
                message: action.newMessagePost,
                likesCount: '0 likes'
            }
            let stateCopy = {
                ...state,
                PostData: [...state.PostData, newPost],
            };
            return stateCopy;
        };
        case 'profile/SET_USER_PROFILE':
            return {
                ...state,
                userProfile: action.profile
            };
        case 'profile/SET_USER_STATUS':
            return {
                ...state,
                status: action.status
            };
        case 'profile/DELETE_POST':
            return {
                ...state,
                PostData: [...state.PostData].filter(p => p.id !== action.postId)
            }
        case 'profile/SET_PHOTO':
            return {
                ...state,
                userProfile: { ...state.userProfile, photos: action.file } as ProfileType
            }
        default:
            return state;
    }
}
type ActionTypes = InferActionsTypes<typeof actions>;

export const actions = {
    addPostActionCreator: (newMessagePost: string) => {
        return {
            type: 'profile/ADD_POST',
            newMessagePost
        } as const
    },
    setUserProfile: (profile: ProfileType) => {
        return {
            type: 'profile/SET_USER_PROFILE',
            profile
        } as const
    },
    setStatus: (status: string) => {
        return {
            type: 'profile/SET_USER_STATUS',
            status
        } as const
    },
    deletePost: (postId: number) => {
        return {
            type: 'profile/DELETE_POST',
            postId
        } as const
    },
    setPhotoSuccess: (file: PhotosType) => {
        return {
            type: 'profile/SET_PHOTO',
            file
        } as const
    }
}


type ThunkType = BaseThunkType<ActionTypes | FormAction> // 1. то что возвращается 2. глобальный стейт 3. экстрапараметры 4. тип экшнов



export const userProfileThunkCreator = (userId: number | null): ThunkType => {
    return async (dispatch) => {
        const data = await ProfileApi.getProfile(userId)
        dispatch(actions.setUserProfile(data));
    }
}
export const getUserStatus = (userId: number | null): ThunkType => async (dispatch) => {
    const data = await ProfileApi.getStatus(userId)
    dispatch(actions.setStatus(data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        const data = await ProfileApi.setStatus(status)
        if (data.resultCode === 0) {
            dispatch(actions.setStatus(status))
        }
    } catch (error: any) { // idk
        alert(error.response.status)
    }
}
export const uploadPhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await ProfileApi.setPhoto(file)
    if (data.resultCode === 0) {
        dispatch(actions.setPhotoSuccess(data.data.photos))
    }
}
export const saveForm = (formData: ProfileType): ThunkType => async (dispatch, getState) => {
    const data = await ProfileApi.setUserData(formData);
    const userId = getState().auth.userId;
    if (data.resultCode === 0) {
        dispatch(userProfileThunkCreator(userId));
    } else {
        let action = stopSubmit('profileDataForm', { _error: data.messages[0] }); // idk
        dispatch(action);
        return Promise.reject(data.messages[0]);
    }
}

export default profileReducer;