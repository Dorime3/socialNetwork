import axios from "axios"

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'c8f4bb25-94f1-4ddf-880b-405bea8616e0'
    }
})

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D,
    messages: Array<string>,
    resultCode: RC
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}