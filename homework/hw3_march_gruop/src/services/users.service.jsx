import {urls} from "../configs/urls";
import {axiosInstance} from "./axios.service";

const getUser = ()=> axiosInstance.get(`${urls.users}`);

export {getUser};