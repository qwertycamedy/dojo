import { configureStore } from "@reduxjs/toolkit";
import profileHeader from "./slices/profile/profileHeaderSlice";
import profilePosts from "./slices/profile/profilePostsSlice";
import messagesLinks from "./slices/messages/messagesLinksSlice";
import messagesWindow from "./slices/messages/messagesWindowSlice";

export const store = configureStore({
  reducer: {
    profileHeader,
    profilePosts,
    messagesLinks,
    messagesWindow,
  },
});