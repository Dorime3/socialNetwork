import { ResultCodeForCaptchaEnum, ResultCodesEnum } from "../components/api/requestsAPI"
import { UrlApi } from "../components/api/UrlApi";
import { AuthApi } from "../components/api/AuthApi";
import { FormAction, stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { AppStateType, BaseThunkType, InferActionsTypes } from "./redux-store";
import { Action } from "redux";


const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    auth: false,
    url: null as string | null
}
export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
            return {
                ...state,
                ...action.data
            }
        case 'auth/SET_CAPTCHA_URL':
            return {
                ...state,
                url: action.url
            }
        default:
            return state
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes | FormAction>;


export const actions = {
    setUserData: (userId: number | null, email: string | null, login: string | null, auth: boolean) => ({ type: 'auth/SET_USER_DATA', data: { userId, email, login, auth } } as const),
    setCaptchaUrl: (url: string) => ({ type: 'auth/SET_CAPTCHA_URL', url } as const)
}


export const authMeThunkCreator = (): ThunkType => async (dispatch) => {
    const data = await AuthApi.authMe()

    if (data.resultCode === ResultCodesEnum.Success) {
        const { id, email, login } = data.data
        dispatch(actions.setUserData(id, email, login, true))
    }
}


export const loginMe = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    const response = await AuthApi.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(authMeThunkCreator())
    } else {
        if (response.data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            const data = await UrlApi.getCaptchaUrl()
            const url = data.url;
            dispatch(actions.setCaptchaUrl(url));
        }
        let action = stopSubmit('loginForm', { _error: response.data.messages[0] }); //idk
        dispatch(action);
    }
}

export const logoutMe = (): ThunkType => async (dispatch) => {
    const response = await AuthApi.logout()
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setUserData(null, null, null, false))
    }
}


export default authReducer;