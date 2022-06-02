import {useEffect, useState} from 'react';

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => {
                setUsers(response);
            });
    }, []);
    return (
        <div className={"users"}>
            {users.map(response => <h3 key={response.id}>{response.name}</h3>)}
        </div>
    );
};