import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadStatus } from "../../loadStatus";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

export const fetchChats = createAsyncThunk("chats/fetchChats", async () => {
  try {
    const res = await getDocs(collection(db, "chats"));
    const newData = res.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return newData;
  } catch (err) {
    console.log(`не удалось получить чаты из-за ошибки: ${err}`);
  }
});

const initialState = {
  chats: [],
  chatsLoadStatus: "idle",
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchChats.pending, state => {
      state.chatsLoadStatus = loadStatus.LOADING
    })
    .addCase(fetchChats.fulfilled, (state,action) => {
      state.chatsLoadStatus = loadStatus.SUCCESS
      state.chats = action.payload;
    })
    .addCase(fetchChats.rejected, state => {
      state.chatsLoadStatus = loadStatus.ERROR
    })
  }
});

// export const {} = chatsSlice.actions;
export const chatsSel = state => state.chats;
export default chatsSlice.reducer;
