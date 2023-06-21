import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth/authSlice";
import header from "./slices/header/headerSlice";
import posts from "./slices/posts/postsSlice";
import filters from "./slices/filters/filtersSlice";
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
    filters,
    profileHeader,
  },
});
