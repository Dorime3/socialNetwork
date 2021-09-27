import { instance } from "./requestsAPI";

export type UrlApiResponseType = {
    url: string
}

export const UrlApi = {
    getCaptchaUrl() {
        return instance.get<UrlApiResponseType>('security/get-captcha-url')
            .then(response => response.data);
    }
};
