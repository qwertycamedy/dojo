import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { loadStatus } from "../../loadStatus";

export const fetchDudes = createAsyncThunk("dudes/fetchDudes", async (authUserId) => {
    try {
        const res = await getDocs(collection(db, "dudes"));
        const newData = res.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        const filteredData = newData.filter(dude => dude.myId !== authUserId);
        return filteredData;
      } catch (err) {
        console.log(err);
      }
});

const initialState = {
  dudes: [],
  dudesLoadStatus: "idle",
};

const dudesSlice = createSlice({
  name: "dudes",
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchDudes.pending, state => {
        state.dudesLoadStatus = loadStatus.LOADING;
      })
      .addCase(fetchDudes.fulfilled, (state, action) => {
        state.dudesLoadStatus = loadStatus.SUCCESS;
        state.dudes = action.payload;
      })
      .addCase(fetchDudes.rejected, state => {
        state.dudesLoadStatus = loadStatus.ERROR;
      });
  },
});

// const {} = dudesSlice.actions;

export const dudesSel = state => state.dudes;

export default dudesSlice.reducer;
