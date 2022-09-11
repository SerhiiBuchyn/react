import {urls} from "../../configs/urls";
import baseUrls from "../../configs/urls";

export const saveComment = (comment) => {
    fetch(`${baseUrls}` + `${urls.comments}`, {
        method: "POST",
        body: JSON.stringify({comment}),
        headers: {"Content-type": "application/json; charset=UTF-8"},
    })
        .then(response => response.json())
        .then(comment => console.log(comment))
};