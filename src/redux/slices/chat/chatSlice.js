import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

// export const {} = chatSlice.actions;
export const chatSel = state => state.chats;
export default chatSlice.reducer;