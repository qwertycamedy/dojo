import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    chats: [
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
}

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {

    },
    extraReducers: builder => {

    }
})

// export const {} = messagesSlice.actions;

export const messagesSel = state => state.messages;

export default messagesSlice.reducer;