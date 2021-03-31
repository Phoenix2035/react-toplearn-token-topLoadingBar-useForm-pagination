import {createSlice} from "@reduxjs/toolkit";
import http from "../../services/httpService";
import config from "../../services/config.json";

const CourseReducer = createSlice({
    name: "course",
    initialState: {
        course: {}
    },
    reducers: {
        setCourse: (state, action) => {
            return state = {...action.payload}
        },
    }
})


export const getSingleCourse = courseId => async dispatch => {
    const {data} = await http.get(`${config.toplearnapi}/api/course/${courseId}`)
   await dispatch(setCourse(data.course))
}

export const {setCourse} = CourseReducer.actions

export default CourseReducer.reducer