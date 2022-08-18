import './App.css';
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {

    return (
        <div className={"wrap"}>
            <div className={"wrap_users_posts"}>
                <Users/>
                <Posts/>
            </div>
            <div className={"wrap_comments"}>
                <Comments/>
            </div>
        </div>
    )

}


export default App;