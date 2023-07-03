import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatFieldVal: "",
  messages: [],
  chatLoadStatus: "idle",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatFieldVal: (state, action) => {
      state.chatFieldVal = action.payload;
    },
    clearChatFieldVal: state => {
      state.chatFieldVal = "";
    },
  },
  extraReducers: {},
});

export const chatSel = state => state.chat;
export const { setChatFieldVal, clearChatFieldVal } = chatSlice.actions;
export default chatSlice.reducer;
