import React from 'react';
import {Route, Redirect} from "react-router";
import {useSelector} from "react-redux";


function PrivateRoute(props) {
    const user = useSelector(state => state.user)

    const isEmpty = obj => {
        if (Object.keys(obj).length === 0 && obj.constructor === Object) return true
        return false
    }


    return isEmpty(user) ? <Route {...props}/> : <Redirect to={"/login"}/>

}

export default PrivateRoute;