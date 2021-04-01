import React from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import AdminTopNav from "../Admin/AdminTopNav";
import AdminSidebar from "../Admin/AdminSidebar";

function PrivateLayout({children}) {
    const user = useSelector(state => state.user)
    return (
        <div id="wrapper">
            <Helmet>
                <title>داشبورد</title>
            </Helmet>

            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="navbar-header">
                    <Link to="/dashboard">
                        داشبورد
                    </Link>
                </div>
                <AdminTopNav user={user}/>
                <AdminSidebar/>
            </nav>
            <div id="page-wrapper">
                {children}
            </div>
        </div>
    );
}

export default PrivateLayout;