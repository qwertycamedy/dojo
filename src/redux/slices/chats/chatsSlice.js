import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {

  },
  extraReducers: builder => {

  },
});

// export const {} = chatsSlice.actions;
export const chatsSel = state => state.chats;
export default chatsSlice.reducer;