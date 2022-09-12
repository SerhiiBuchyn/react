import {useState} from "react";

import Users from '../src/Components/Users/Users';
import Posts from "./Components/Posts/Posts";
import './App.css';

function App() {

    const [userId,setUserId]=useState(null);
    const getUserId=(userId)=>setUserId(userId);


  return (
    <div className="wrapper">
      <Users getUserId={getUserId}/>
        {userId && <Posts userId={userId}/>}

    </div>
  );
}

export default App;
