import axios from "axios";

import baseUrls from "../../configs/urls";

export const axiosInstance = axios.create({
    baseURL: baseUrls,
    headers: {"Content-type": "application/json; charset=UTF-8"}
});