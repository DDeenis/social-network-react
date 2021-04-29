import axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';
const apiKey = 'e01108d2-9c0c-4852-900d-fe7fba522054';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrl,
    headers: {
        "API-KEY": apiKey
    }
})

const getUsers = (page = 1, pageSize = 3) => 
    axiosInstance.get(`users?page=${page}&count=${pageSize}`).then(r => r.data);

const getMe = () => 
    axiosInstance.get(`me`).then(r => r.data);

const followUser = (userId) => 
    axiosInstance.post(`follow/${userId}`).then(r => r.data);

const unfollowUser = (userId) => 
    axiosInstance.delete(`follow/${userId}`).then(r => r.data);

const authUser = (email, password, remember = false) => 
    axiosInstance.post(`auth/login?email=${email}&password=${password}&rememberMe=${remember}`).then(r => r.data);

const userApi = {
    getUsers,
    followUser,
    unfollowUser,
    authUser,
    getMe
};

export default userApi;