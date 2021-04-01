import React from 'react';
import {Link, withRouter} from "react-router-dom";

function AdminSidebar({location}) {
    return (
        <div>
            <ul className="nav navbar-nav side-nav" style={{height: "100vh"}}>
                <li className={location.pathname === "/dashboard" ? "active" : ""}>
                    <Link>
                        <i className="fa fa-fw fa-dashboard"/> داشبورد
                    </Link>
                </li>

                <li className={location.pathname === "/dashboard/courses" ? "active" : ""}>
                    <Link>
                        <i className="fa fa-fw fa-graduation-cap"/> دوره ها
                    </Link>
                </li>
            </ul>

        </div>
    );
}

export default withRouter(AdminSidebar);