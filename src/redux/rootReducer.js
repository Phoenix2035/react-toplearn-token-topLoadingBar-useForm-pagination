import {combineReducers} from '@reduxjs/toolkit'
import courses from "./models/courses.reducer"
import course from "./models/course.reducer"
import user from "./models/user.reducer"
import {loadingBarReducer} from "react-redux-loading-bar";


const rootReducer = combineReducers({
    courses,
    course,
    user,
    loadingBar: loadingBarReducer
});

export default rootReducer;