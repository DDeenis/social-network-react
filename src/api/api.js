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

const getUsers = async (page = 1, pageSize = 3) => 
    (await axiosInstance.get(`users?page=${page}&count=${pageSize}`)).data;

const getMe = async () => 
    (await axiosInstance.get('auth/me')).data;

const getProfileInfo = async (id) =>
    (await axiosInstance.get(`profile/${id}`)).data;

const followUser = async (userId) => 
    (await axiosInstance.post(`follow/${userId}`)).data;

const unfollowUser = async (userId) => 
    (await axiosInstance.delete(`follow/${userId}`)).data;

const authUser = async (email, password, remember = false) => 
    (await axiosInstance.post(`auth/login`, { email, password, remember })).data;

const logoutUser = async () =>
    (await axiosInstance.delete('auth/login')).data;

const getUserStatus = async (userId) => 
    (await axiosInstance.get(`profile/status/${userId}`)).data;

const updateUserStatus = async (statusText) =>
    (await axiosInstance.put('profile/status', { status: statusText })).data;

const uploadAvatar = async (formData) => 
    (await axiosInstance.put('profile/photo', formData)).data;

const userApi = {
    getUsers,
    followUser,
    unfollowUser,
    authUser,
    logoutUser,
    getMe,
    getProfileInfo,
    getUserStatus,
    updateUserStatus,
    uploadAvatar
};

export default userApi;