import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { loadStatus } from "../../loadStatus";

export const fetchChats = createAsyncThunk("messages/fetchChats", async () => {
  try {
    const res = await getDocs(collection(db, "chats"));
    const newData = res.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return newData;
  } catch (err) {
    console.log(`сообщения не получены из-за ошибки: ${err}`);
  }
});

export const fetchChatMessages = createAsyncThunk(
  "messages/fetchChatMessages",
  async chatId => {
    try {
      const messagesRef = collection(db, "chats", chatId, "messages");
      const q = query(messagesRef, orderBy("timestamp", "desc"), limit(35));
      const querySnapshot = await onSnapshot(q);
      const messages = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(querySnapshot.docs);
      return messages.reverse();
    } catch (err) {
      console.log(`сообщения не получены из-за ошибки: ${err}`);
    }
  }
);

export const createNewChat = createAsyncThunk(
  "messages/createNewChat",
  async () => {
    try {

    } catch (err) {
      console.log('не удалось создать новый диалог')
    }
  }
);

export const sendNewMessage = createAsyncThunk(
  "messages/sendNewMessage",
  async (chatId, newMessage) => {
    try {
      const chatRef = collection(db, "chats", chatId, "messages");
      await addDoc(chatRef, newMessage);
    } catch (err) {
      console.log(`сообщение не отправлено из-за ошибки: ${err}`);
    }
  }
);

const initialState = {
  chats: [],
  chatsLoadStatus: "idle",
  messages: [],
  messagesLoadStatus: "idle",
  newMesValue: "",
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setNewMesValue: (state, action) => {
      state.newMesValue = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchChats.pending, state => {
        state.chatsLoadStatus = loadStatus.LOADING;
        state.chats = [];
      })
      .addCase(fetchChats.fulfilled, (state, action) => {
        state.chatsLoadStatus = loadStatus.SUCCESS;
        state.chats = action.payload;
      })
      .addCase(fetchChats.rejected, state => {
        state.chatsLoadStatus = loadStatus.ERROR;
        state.chats = [];
      })

      .addCase(fetchChatMessages.pending, state => {
        state.messagesLoadStatus = loadStatus.LOADING;
      })
      .addCase(fetchChatMessages.fulfilled, (state, action) => {
        state.messagesLoadStatus = loadStatus.SUCCESS;
        state.messages = action.payload;
      })
      .addCase(fetchChatMessages.rejected, state => {
        state.messagesLoadStatus = loadStatus.ERROR;
      })

      .addCase(sendNewMessage.pending, (state, action) => {
        state.chatsLoadStatus = loadStatus.LOADING;
        state.chats[action.meta.arg] = {
          ...state.chats[action.meta.arg],
        };
      })
      .addCase(sendNewMessage.fulfilled, (state, action) => {
        state.chatsLoadStatus = loadStatus.SUCCESS;
        state.chats[action.meta.arg] = {
          ...state.chats[action.meta.arg],
        };
      })
      .addCase(sendNewMessage.rejected, (state, action) => {
        state.chatsLoadStatus = loadStatus.ERROR;
        state.chats[action.meta.arg] = {
          ...state.chats[action.meta.arg],
        };
      });
  },
});

export const { setNewMesValue } = messagesSlice.actions;

export const messagesSel = state => state.messages;

export default messagesSlice.reducer;
