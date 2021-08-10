import { AuthApi } from "../components/api/requestsAPI"
import { stopSubmit } from "redux-form";


const initialState = {
    userId: null,
    email: null,
    login: null,
    auth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setUserData = (userId, email, login, auth) => ({ type: 'SET_USER_DATA', data: { userId, email, login, auth } })

export const authMeThunkCreator = () => (dispatch) => {
    return AuthApi.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                const { id, email, login } = data.data
                dispatch(setUserData(id, email, login, true))
            }
        })
}


export const loginMe = (email, password, rememberMe) => dispatch => {
    AuthApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authMeThunkCreator())
            } else {
                let action = stopSubmit('loginForm', { _error: response.data.messages[0] });
                dispatch(action);
            }
        })
}

export const logoutMe = () => dispatch => {
    AuthApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
}
export default authReducer;