import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadStatus } from "../../loadStatus";

export const fetchMes =
  createAsyncThunk("chat/fetchMes",
  async chatId => {
    try {
    } catch (err) {
      console.log(`не удалось получить сообщения из-за ошибки: ${err}`);
    }
  });

const initialState = {
  mes: [],
  mesLoadStatus: "idle",
  mesVal: "",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setMesVal: (state, action) => {
      state.mesVal = action.payload;
    },
  },
});

export const { setMesVal } = chatSlice.actions;
export const chatSel = state => state.chats;
export default chatSlice.reducer;
