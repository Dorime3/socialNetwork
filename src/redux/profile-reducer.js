import { stopSubmit } from "redux-form";
import { ProfileApi } from "../components/api/requestsAPI";

const initialState = {
    PostData: [
        { id: 1, message: 'Hi, how are you?', likesCount: '12 likes' },
        { id: 2, message: 'It\'s my first post', likesCount: '0 likes' },
        { id: 3, message: 'Blabla', likesCount: '0 likes' },
        { id: 4, message: 'Blabla', likesCount: '0 likes' }
    ],
    userProfile: null,
    status: ''
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
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
        case 'SET_USER_PROFILE':
            return {
                ...state,
                userProfile: action.profile
            };
        case 'SET_USER_STATUS':
            return {
                ...state,
                status: action.status
            };
        case 'DELETE_POST':
            return {
                ...state,
                PostData: [...state.PostData].filter(p => p.id !== action.postId)
            }
        case 'SET_PHOTO':
            return {
                ...state,
                userProfile: { ...state.userProfile, photos: action.file }
            }
        default:
            return state;
    }
}
export const addPostActionCreator = (newMessagePost) => {
    return {
        type: 'ADD-POST',
        newMessagePost
    }
}

export const setUserProfile = (profile) => {
    return {
        type: 'SET_USER_PROFILE',
        profile
    }
}
export const setStatus = (status) => {
    return {
        type: 'SET_USER_STATUS',
        status
    }
}
export const deletePost = (postId) => {
    return {
        type: 'DELETE_POST',
        postId
    }
}
export const setPhotoSuccess = (file) => {
    return {
        type: 'SET_PHOTO',
        file
    }
}

export const userProfileThunkCreator = (userId) => {
    return async (dispatch) => {
        const data = await ProfileApi.getProfile(userId)
        dispatch(setUserProfile(data));
    }
}
export const getUserStatus = (userId) => async (dispatch) => {
    const response = await ProfileApi.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await ProfileApi.setStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const uploadPhoto = (file) => async (dispatch) => {
    const response = await ProfileApi.setPhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.data.photos))
    }
}
export const saveForm = (formData) => async (dispatch, getState) => {
    const response = await ProfileApi.setUserData(formData);
    const userId = getState().auth.userId;
    if (response.data.resultCode === 0) {
        dispatch(userProfileThunkCreator(userId));
    } else {
        let action = stopSubmit('profileDataForm', { _error: response.data.messages[0] });
        dispatch(action);
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;