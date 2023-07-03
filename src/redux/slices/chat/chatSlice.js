import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatFieldVal: "",
  messages: [
    {
      id: "qw",
      author: {
        id: "",
        img: "",
        nickname: "Qwerty Camedy",
      },
      date: "07/03/2023, 22:05",
      text: `Lorem, ipsum dolor sit amet 
      consectetur adipisicing elit. Et officia 
      reiciendis eius hic nemo aspernatur maxime 
      iusto! Illum sapiente quas, magnam, non officia, 
      nihil qui sed repellat sequi inventore dolorum!`,
    },
    {
      id: "sn",
      author: {
        id: "",
        img: "",
        nickname: "SunMary",
      },
      date: "07/03/2023, 22:08",
      text: `Lorem, ipsum dolor sit amet 
      consectetur adipisicing elit.`,
    },
  ],
  chatLoadStatus: "idle",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatFieldVal: (state, action) => {
      state.chatFieldVal = action.payload;
    },
    clearChatFieldVal: state => {
      state.chatFieldVal = "";
    },
  },
  extraReducers: {},
});

export const chatSel = state => state.chat;
export const { setChatFieldVal, clearChatFieldVal } = chatSlice.actions;
export default chatSlice.reducer;
