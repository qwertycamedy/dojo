import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadStatus } from "../../loadStatus";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase";

export const fetchDude = createAsyncThunk(
  "dude/fetchDude",
  async dudeNickname => {
    try {
      const dudesRef = collection(db, "dudes");
      const q = query(dudesRef, where("nickname", "==", dudeNickname));
      const querySnapshot = await getDocs(q);
      const dude = querySnapshot.docs[0].data();
      return dude;
    } catch (err) {
      console.log(`дудь не получен из-за ошибки: ${err}`);
    }
  }
);

const initialState = {
  dude: {},
  isStatusShorted: true,
  dudeLoadStatus: "idle",
};

const dudeSlice = createSlice({
  name: "dude",
  initialState,
  reducers: {
    setIsStatusShorted: (state, action) => {
      state.isStatusShorted = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDude.pending, state => {
        state.dudeLoadStatus = loadStatus.LOADING;
        state.dude = {};
      })
      .addCase(fetchDude.fulfilled, (state, action) => {
        state.dudeLoadStatus = loadStatus.SUCCESS;
        state.dude = action.payload;
      })
      .addCase(fetchDude.rejected, state => {
        state.dudeLoadStatus = loadStatus.ERROR;
        state.dude = {};
      });
  },
});

export const { setIsStatusShorted } = dudeSlice.actions;

export const dudeSel = state => state.dude;

export default dudeSlice.reducer;
