import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth/authSlice";
import header from "./slices/header/headerSlice";
import posts from "./slices/posts/postsSlice";
import postsFilters from "./slices/posts/postsFiltersSlice";
import profileHeader from "./slices/profile/profileHeaderSlice";
import messages from './slices/messages/messagesSlice'

export const store = configureStore({
  reducer: {
    auth,
    header,
    posts,
    postsFilters,
    profileHeader,
    messages
  },
});
