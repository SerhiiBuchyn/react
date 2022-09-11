import {urls} from "../../configs/urls";
import {axiosInstance} from "../axios.service/axios.service";

export const saveUser = (user, id) => axiosInstance.post(`${urls.users}`, {
    user: {
        name: "name",
        username: "username",
        id: id
    }
});