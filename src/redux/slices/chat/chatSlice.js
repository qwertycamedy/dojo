import { createSlice } from "@reduxjs/toolkit";
import { loadStatus } from "../../loadStatus";

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
    chatPending: state => {
      state.chatLoadStatus = loadStatus.LOADING;
    },
    chatFulfilled: state => {
      state.chatLoadStatus = loadStatus.SUCCESS;
    },
    chatRejected: state => {
      state.chatLoadStatus = loadStatus.ERROR;
    },
  },
  extraReducers: {},
});

export const chatSel = state => state.chat;
export const { setChatFieldVal, clearChatFieldVal, chatPending, chatFulfilled, chatRejected} = chatSlice.actions;
export default chatSlice.reducer;
