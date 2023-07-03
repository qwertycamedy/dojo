import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth/authSlice";
import header from "./slices/header/headerSlice";
import posts from "./slices/posts/postsSlice";
import filters from "./slices/filters/filtersSlice";
import profileHeader from "./slices/profile/profileHeaderSlice";
import dudes from "./slices/dudes/dudesSlice";
import dude from "./slices/dude/dudeSlice";
import chat from "./slices/chat/chatSlice";

export const store = configureStore({
  reducer: {
    auth,
    header,
    chat,
    dudes,
    dude,
    posts,
    filters,
    profileHeader,
  },
});
