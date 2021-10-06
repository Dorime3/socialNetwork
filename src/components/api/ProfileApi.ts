import { PhotosType, ProfileType } from "../../types/types";
import { instance, APIResponseType, ResultCodesEnum } from "./requestsAPI";

type SetPhotoResponseType = {
    photos: PhotosType
}
export const ProfileApi = {
    getProfile(id: number | null) {
        return instance.get<ProfileType>(`profile/${id}`)
            .then(response => response.data);
    },
    getStatus(userId: number | null) {
        return instance.get<string>(`/profile/status/${userId}`)
            .then(response => response.data);
    },
    setStatus(status: string) {
        return instance.put<APIResponseType>('/profile/status', { status: status })
            .then(response => response.data);
    },
    setPhoto(file: any) {
        const formData = new FormData();
        formData.append('image', file);
        return instance.put<APIResponseType<SetPhotoResponseType>>('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data);
    },
    setUserData(form: ProfileType) {
        return instance.put<APIResponseType>('profile', form)
            .then(response => response.data);
    }
};
