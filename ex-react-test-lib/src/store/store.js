import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer, {counterSlice} from "./reducers/counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const createReduxStore = (initialState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState
    })
}