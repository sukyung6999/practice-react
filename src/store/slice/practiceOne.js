import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    one: 1,
    two: 2,
    three: 3
}

const reducers = {
    setOne(state, payload) {
        console.log(state, payload);
    }
}

const sliceOne = createSlice({
    name: 'one',
    initialState,
    reducers
});

export const {setOne} = sliceOne.actions;
export default sliceOne.reducer