import {useEffect, useState} from "react";

export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(response => {
                setPosts(response);
            });
    }, []);
    return (
        <div className={"posts"}>
            {posts.map(response => <p key={response.id}>{response.title}</p>)}
        </div>
    );
};