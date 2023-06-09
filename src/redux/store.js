import { configureStore } from "@reduxjs/toolkit";
import auth from './slices/auth/authSlice'
import header from "./slices/header/headerSlice";
import posts from "./slices/posts/postsSlice";
import profileHeader from "./slices/profile/profileHeaderSlice";
import messagesLinks from "./slices/messages/messagesLinksSlice";
import messagesWindow from "./slices/messages/messagesWindowSlice";

export const store = configureStore({
  reducer: {
    auth,
    header,
    posts,
    profileHeader,
    messagesLinks,
    messagesWindow,
  },
});