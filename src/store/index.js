import { configureStore } from "@reduxjs/toolkit";
import SliceOneReducer from './slice/practiceOne'

export default configureStore({
    reducer: {
        one: SliceOneReducer
    }
})