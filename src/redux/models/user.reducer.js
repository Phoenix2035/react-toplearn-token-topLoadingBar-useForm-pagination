import {createSlice} from "@reduxjs/toolkit";

const UserReducer = createSlice({
    name: "user",
    initialState: {
        user: {}
    },
    reducers: {
        setUser: (state, action) => {
            return state = {...action.payload}
        },
        clearUser: (state, action) => {
            return state = {}
        }
    }
})

export const {setUser, clearUser} = UserReducer.actions

export default UserReducer.reducer