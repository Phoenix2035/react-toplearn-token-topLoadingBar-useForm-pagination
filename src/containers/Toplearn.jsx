import React, {useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import {decodeToken} from "../utils/decodeToken";

import Course from "../components/Course/Course";
import MainLayout from "../components/Layouts/MainLayout";
import Login from "../components/Login/Login";
import Register from "./../components/Register/Register";
import Archive from "./../components/Course/Archive";
import SingleCourse from "./../components/Course/SingleCourse";
import UserProfile from "./../components/Profile/UserProfile";
import {useDispatch, useSelector} from "react-redux";
import {getAllCourses} from "../redux/models/courses.reducer";
import {paginate} from "../utils/paginate";
import {clearUser, setUser} from "../redux/models/user.reducer";
import Logout from "../components/Login/Logout";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import PrivateLayout from "../components/Layouts/PrivateLayout";
import {isEmpty} from "lodash";
import {Redirect} from "react-router";
import Dashboard from "../components/Admin/Dashboard";


const TopLearn = () => {
    const dispatch = useDispatch()
    const courses = useSelector(state => state.courses)
    const user = useSelector(state => state.user)

    const indexCourses = paginate(courses, 1, 8)


    useEffect(() => {
        dispatch(getAllCourses())
    }, [])

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            const decodedToken = decodeToken(token)
            const dateNow = Math.floor(Date.now() / 1000) // convert to second

            if (decodedToken.payload.exp < dateNow) {
                localStorage.removeItem("token")
                dispatch(clearUser())
            } else {
                dispatch(setUser(decodedToken.payload.user))
            }
        }
    }, [])

    return (
        <Switch>
            <Route path={["/dashboard"]}>
                <PrivateLayout>
                    <Route exaxt path="/dashboard"
                           render={() => !isEmpty(user) && user.isAdmin ? (<Dashboard courses={courses}/>) :
                               (<Redirect to="/"/>)}/>
                </PrivateLayout>
            </Route>

            <Route path={["/"]}>
                <MainLayout>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/archive" component={Archive}/>
                        <Route path="/course/:id" component={SingleCourse}/>
                        <PrivateRoute path="/user-profile" component={UserProfile}/>
                        <Route path="/" exact
                               render={() => indexCourses.length > 0 ? (<Course courses={indexCourses}/>) : (
                                   <h2 style={{textAlign: "center", margin: "2em"}}>هیچ دوره ای جهت نمایش وجود
                                       ندارد</h2>
                               )}/>
                    </Switch>
                </MainLayout>
            </Route>
        </Switch>
    );
};

export default TopLearn;
