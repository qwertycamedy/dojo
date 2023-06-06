import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      title: "b",
    },
    {
      id: 2,
      title: "a",
    },
  ],
};

export const profilePostsSlice = createSlice({
  name: "profilePosts",
  initialState,
  reducers: {},
});

// export const {  } = profileHeaderSlice.actions

export const profilePostsSel = state => state.profilePosts;

export default profilePostsSlice.reducer;
