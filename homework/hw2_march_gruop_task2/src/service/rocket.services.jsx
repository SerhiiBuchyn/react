import baseUrl from "../configs/urls";

const getRockets = () => fetch(`${baseUrl}`).then(response => response.json());

export {getRockets};