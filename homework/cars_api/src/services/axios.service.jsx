import axios from "axios";
import {baseURL} from "../configs";

export const axiosInstance = axios.create({baseURL: baseURL});