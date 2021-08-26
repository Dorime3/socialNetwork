import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'c8f4bb25-94f1-4ddf-880b-405bea8616e0'
    }
})

export const UsersApi = {
    userUnfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => { return response.data })
    },
    userFollow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    },
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const ProfileApi = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    setStatus(status) {
        return instance.put('/profile/status', { status: status })
    },
    setPhoto(file) {
        const formData = new FormData();
        formData.append('image', file);
        return instance.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    setUserData(form) {
        return instance.put('profile', form)
    }
}

export const AuthApi = {
    authMe() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe })
    },
    logout() {
        return instance.delete('auth/login')
    }
}
