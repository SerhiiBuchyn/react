import axios from 'axios';

import baseUrl from "../configs/urls";

export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
});



