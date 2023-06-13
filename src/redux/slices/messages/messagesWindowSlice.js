import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [
    {
      id: 1,
      myId: 1,
      author: {
        name: "User User",
        img: "",
      },
      date: "06/14/23, 02:25",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda magnam ad tempore explicabo atque doloribus, a iste quis harum doloremque illo corporis odio rerum nemo vero, soluta dicta. Incidunt, aperiam.",
    },
    {
      id: 2,
      myId: 2,
      author: {
        name: "Qwerty Camedy",
        img: "",
      },
      date: "06/14/23, 02:25",
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
  ],
};

export const messagesWindowSlice = createSlice({
  name: "messagesWindow",
  initialState,
  reducers: {},
});

// export const {  } = profileHeaderSlice.actions

export const messagesWindowSel = state => state.messagesWindow;

export default messagesWindowSlice.reducer;
