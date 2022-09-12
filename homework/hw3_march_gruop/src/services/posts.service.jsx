import {urls} from "../configs/urls";
import {axiosInstance} from "./axios.service";

const getPosts = (userId) => axiosInstance.get(`${urls.posts}` + `${userId}`);

export {getPosts};