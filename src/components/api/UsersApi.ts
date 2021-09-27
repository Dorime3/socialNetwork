import { UserType } from "../../types/types";
import { instance, APIResponseType } from "./requestsAPI";

export type getUsersResponseType = {
    items: Array<UserType>,
    totalCount: number,
    error: string
}
export const UsersApi = {
    userUnfollow(id: number) {
        return instance.delete<APIResponseType>(`follow/${id}`)
            .then(response => { return response.data; });
    },
    userFollow(id: number) {
        return instance.post<APIResponseType>(`follow/${id}`, {})
            .then(response => response.data);
    },
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
};
