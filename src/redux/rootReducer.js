import { combineReducers } from '@reduxjs/toolkit'
import courses from "./models/courses.reducer"
import course from "./models/course.reducer"
import user from "./models/user.reducer"


const rootReducer = combineReducers({
    courses,
    course,
    user,
});

export default rootReducer;