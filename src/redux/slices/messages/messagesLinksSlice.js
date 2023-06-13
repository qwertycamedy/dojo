import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messagesLinks: [
    {
      id: 1,
      myId: "01",
      user: {
        name: "User User",
        img: "",
      },
      lastMessage: {
        date: "06/14/23, 02:25",
        text: "Bla ble blu emae lmao i u here there",
      },
    },
    {
      id: 2,
      myId: "02",
      user: {
        name: "Anonim Anonimych",
        img: "",
      },
      lastMessage: {
        date: "06/14/23, 02:26",
        text: "Bla ble blu emae lmao i u here there",
      },
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
