import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messagesLinks: [
    {
        id: 1,
        title: 'a',
    },
    {
        id: 2,
        title: 'b',
    },
  ],
};

export const messagesLinksSlice = createSlice({
  name: "messagesLinks",
  initialState,
  reducers: {},
});

// export const {  } = profileHeaderSlice.actions

export const messagesLinksSel = state => state.messagesLinks;

export default messagesLinksSlice.reducer;
