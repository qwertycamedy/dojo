import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    chats: [
        {
          id: 1,
          dude: {
            id: '1',
            nickname: "Dude Dude",
            img: "",
          },
          lastMessage: {
            id: '10000000',
            date: "06/14/23, 02:25",
            text: "Bla ble blu emae lmao i u here there",
          },
        },
        {
          id: 2,
          dude: {
            id: '2',
            nickname: "Anonim Anonimych",
            img: "",
          },
          lastMessage: {
            id: '100100000',
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
            name: "Dude Dude",
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