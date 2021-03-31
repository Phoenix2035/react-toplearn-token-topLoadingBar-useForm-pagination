import React, {useEffect} from 'react';
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {clearUser} from "../../redux/models/user.reducer";

function Logout(props) {
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.removeItem("token")
        dispatch(clearUser())
        history.push("/")
    }, [])


    return null
}

export default Logout;