import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"
import {loadingBarMiddleware} from "react-redux-loading-bar";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loadingBarMiddleware()),
})
export default store