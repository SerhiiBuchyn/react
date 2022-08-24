import {urls} from "../configs/urls";

const getUsers = () => fetch(`${urls.users}`).then(response => response.json());

const getUser = (userId) => fetch(`${urls.users}/${userId}`).then(response => response.json());

const getPosts = (userId) => fetch(`${urls.posts}/${userId}`).then(response => response.json());

export {getUser, getUsers, getPosts};