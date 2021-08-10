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

export const userProfileThunkCreator = (userId) => {
    return (dispatch) => {
        ProfileApi.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}
export const getUserStatus = (userId) => (dispatch) => {
    ProfileApi.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
}

export const updateStatus = (status) => (dispatch) => {
    ProfileApi.setStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}


export default profileReducer;