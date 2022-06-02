import {useEffect, useState} from "react";

export default function Comments() {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(response => {
                setComments(response);
            });
    }, []);
    return (
        <div className={"comments"}>
            {comments.map(response => <h5 key={response.id}>{response.name}</h5>)}
        </div>
    );

};