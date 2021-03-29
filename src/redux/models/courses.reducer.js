import {createSlice} from "@reduxjs/toolkit";
import {getCourses} from "../../services/courseServices";

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
    const {data} = await getCourses()
    dispatch(setCourses(data.courses))
}

export const {setCourses} = CoursesReducer.actions

export default CoursesReducer.reducer
