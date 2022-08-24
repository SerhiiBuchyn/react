import {urls} from "../configs/urls";

const getCharacters = () => fetch(`${urls.character}`).then(response => response.json());

export {getCharacters};
