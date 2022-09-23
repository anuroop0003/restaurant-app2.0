import {configureStore} from "@reduxjs/toolkit";
import Reducer from "./reducer";

const store = configureStore({
    reducer : {
        restaurants: Reducer,
    }
})

export default store;