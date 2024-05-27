import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  title: '',
  content: '',
  btnList: []
}

const reducers = {
  setAlert(state, payload) {
    console.log(payload);
  }
}

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers
})

export const {setAlert} = alertSlice.actions;
export default alertSlice.reducer;