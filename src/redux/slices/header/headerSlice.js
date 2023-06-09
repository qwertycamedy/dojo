import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: '',
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload
    }
  },
});

export const {setTitle} = headerSlice.actions;
export const headerSel = state => state.header

export default headerSlice.reducer;