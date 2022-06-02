import {useEffect, useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import Form from "./components/Form/Form";
import {getUsers} from "./services/user.services";

function App() {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => {
            setUsers([...value.data])
            setFilteredUsers([...value.data])
        })
    }, []);

    const getFilter = (eventData) => {
        let filterArr = [...users];

        if (eventData.name) {
            filterArr = filterArr.filter(user => user.name.toLowerCase().includes(eventData.name.toLowerCase()))
        }
        if (eventData.username) {
            filterArr = filterArr.filter(user => user.username.toLowerCase().includes(eventData.username.toLowerCase()))
        }
        if (eventData.email) {
            filterArr = filterArr.filter(user => user.email.toLowerCase().includes(eventData.email.toLowerCase()))
        }
        setFilteredUsers(filterArr);
    }

    return (
        <div className="wrap">
            <div className="form_wrap">
                <Form getFilter={getFilter}/>
            </div>
            <div className="users_wrap">
                <Users users={filteredUsers}/>
            </div>
        </div>
    )
}

export default App;
