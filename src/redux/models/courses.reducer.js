import {createSlice} from "@reduxjs/toolkit";
import http from "../../services/httpService";
import config from "../../services/config.json";

const CoursesReducer = createSlice({
    name: "courses",
    initialState: [],
    reducers: {
        setCourses: (state, action) => {
            return state = [...action.payload]
        },
    }
})


export const getAllCourses = () => async dispatch => {
    const {data} = await http.get(`${config.toplearnapi}/api/courses`)
    await dispatch(setCourses(data.courses))
}

export const {setCourses} = CoursesReducer.actions

export default CoursesReducer.reducer
