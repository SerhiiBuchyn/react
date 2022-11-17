import {axiosInstance} from "./axios.service";
import {urls} from '../configs';

export const axiosServices = {
    getAll: () => axiosInstance.get(`${urls.users}`),

}