import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="layout__wrapper">
            <div className="layout__menu">
                <h3>layout menu</h3>
                <ul>
                    <li><Link to={'users'}>users page</Link></li>
                    <li><Link to={'posts'}>posts page</Link></li>
                    <li><Link to={'comments'}>comments page</Link></li>
                </ul>
                <Outlet/>
            </div>
        </div>
    )
};

export default Layout;