import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

export const carService = {
    getAll: () => axiosInstance.get(urls.cars),
    create: (car) => axiosInstance.post(urls.cars, car),
    updateById: (id, car) => axiosInstance.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => axiosInstance.delete(`${urls.cars}/${id}`)
};