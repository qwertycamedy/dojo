import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isModalActive: false,
  areaValue: "",
};

const createPostSlice = createSlice({
  name: "createPost",
  initialState,
  reducers: {
    setIsModalActive: (state, action) => {
      state.isModalActive = action.payload;
    },
    setAreaValue: (state, action) => {
      state.areaValue = action.payload;
    },
  },
});

export const { setIsModalActive, setAreaValue } =
  createPostSlice.actions;

export const createPostSel = state => state.createPost;

export default createPostSlice.reducer;
