import {Link, Route, Routes} from "react-router-dom";

import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import About from "./pages/about/About";
import Users from "./components/usersComponents/users/Users";
import Posts from "./components/postsComponents/posts/Posts";
import Comments from "./components/commentsComponents/comments/Comments";

import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="menu">
                <h2>menu</h2>
                <ul>
                    <li><Link to={'/home'}>home</Link></li>
                    <li><Link to={'/layout'}>layout</Link></li>
                    <li><Link to={'/about'}>about</Link></li>
                </ul>
            </div>
            <hr/>
            <div className="menu__content">
                <h3>content</h3>
                <Routes>
                    <Route path={'/home'} element={<Home/>}/>
                    <Route path={'/layout'} element={<Layout/>}>
                        <Route path={'/layout/users'} element={<Users/>}/>
                        <Route path={'/layout/posts'} element={<Posts/>}/>
                        <Route path={'/layout/comments'} element={<Comments/>}/>
                    </Route>
                    <Route path={'/about'} element={<About/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
