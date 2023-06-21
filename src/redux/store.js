import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth/authSlice";
import header from "./slices/header/headerSlice";
import posts from "./slices/posts/postsSlice";
import postsFilters from "./slices/posts/postsFiltersSlice";
import profileHeader from "./slices/profile/profileHeaderSlice";
import messages from "./slices/messages/messagesSlice";
import dudes from "./slices/dudes/dudesSlice";

export const store = configureStore({
  reducer: {
    auth,
    header,
    messages,
    dudes,
    posts,
    postsFilters,
    profileHeader,
  },
});
