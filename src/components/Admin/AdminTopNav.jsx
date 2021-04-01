import React from 'react';
import {Link} from "react-router-dom";

function AdminTopNav({user}) {
    return (
        <ul className="nav navbar-left top-nav">
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-user"/> {user.fullname}
                    <b className="caret"/>
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <Link to="/user-profile">
                            <i className="fa fa-fw fa-user"/> پروفایل
                        </Link>
                    </li>

                    <li>
                        <Link to="/">
                            <i className="fa fa-fw fa-eye"/> مشاهده سایت
                        </Link>
                    </li>

                    <li className="divider"/>

                    <li>
                        <Link to="/logout">
                            <i className="fa fa-fw fa-power-off"/> خروج
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
}

export default AdminTopNav;