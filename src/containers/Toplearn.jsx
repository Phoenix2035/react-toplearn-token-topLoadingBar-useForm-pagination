import React, {useEffect} from "react";
import {Switch, Route} from "react-router-dom";

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


const TopLearn = () => {
    const dispatch = useDispatch()
    const courses = useSelector(state => state.courses)

    const indexCourses = paginate(courses, 1, 8)


    useEffect(() => {
        dispatch(getAllCourses())
    }, [])

    return (
        <MainLayout>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/archive" component={Archive}/>
                <Route path="/course" component={SingleCourse}/>
                <Route path="/user-profile" component={UserProfile}/>
                <Route path="/" exact render={() => <Course courses={indexCourses}/>}/>
            </Switch>
        </MainLayout>
    );
};

export default TopLearn;
