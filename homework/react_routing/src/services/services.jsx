import {axiosInstance} from "./axios.service";
import {urls} from '../configs';

export const axiosServices = {
    getAllUser: () => axiosInstance.get(`${urls.users}`),
    getAllPosts: () => axiosInstance.get(`${urls.posts}`),
    getSinglePost: (id) => axiosInstance.get(`${urls.posts}/${id}`)
};