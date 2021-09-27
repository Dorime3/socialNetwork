import { instance, APIResponseType, ResultCodeForCaptchaEnum, ResultCodesEnum } from "./requestsAPI";



type MeResponseDataType = {
    id: number,
    email: string,
    login: string
}
type LoginResponseDataType = {
    userId: number
}
type LogoutResponseType = {
    data: {},
    resultCode: ResultCodesEnum,
    messages: Array<string>
}

export const AuthApi = {
    authMe() {
        return instance.get<APIResponseType<MeResponseDataType>>('auth/me')
            .then(response => response.data);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCaptchaEnum>>('auth/login', { email, password, rememberMe, captcha });
    },
    logout() {
        return instance.delete<APIResponseType<LogoutResponseType>>('auth/login');
    }
};
