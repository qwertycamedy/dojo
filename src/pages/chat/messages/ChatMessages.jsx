import React, { useEffect, useState } from "react";
import cl from "./ChatMessages.module.scss";
import ChatMessage from "./message/ChatMessage";
import { loadStatus } from "../../../redux/loadStatus";
import Loader from "../../../components/loader/Loader";
import { db } from "../../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import {
  chatFulfilled,
  chatPending,
  chatRejected,
  chatSel,
} from "../../../redux/slices/chat/chatSlice";
import MyNotFound from "../../../components/_UI/myNotFound/MyNotFound";

const ChatMessages = () => {
  const dispatch = useDispatch();
  const { chatLoadStatus } = useSelector(chatSel);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        dispatch(chatPending());
        const q = query(collection(db, "messages"), orderBy("timestamp"));
        const unsubscribe = onSnapshot(q, querySnapshot => {
          let newMessages = [];
          querySnapshot.forEach(doc => {
            newMessages.push({ ...doc.data(), id: doc.id });
          });
          setMessages(newMessages);
          dispatch(chatFulfilled());
        });
        return () => unsubscribe();
      } catch (err) {
        console.log(err);
        dispatch(chatRejected());
      }
    };

    getMessages();
  }, [dispatch]);

  return (
    <div className={cl.messages}>
      {chatLoadStatus === loadStatus.LOADING ? (
        <Loader />
      ) : chatLoadStatus === loadStatus.ERROR ? (
        <MyNotFound title={":("} text={"Произошла невиданная доселе ошибка"} />
      ) : !messages.length ? (
        <MyNotFound title={":)"} text={"Начните общение первым!"} />
      ) : (
        messages &&
        messages.map(message => (
          <ChatMessage message={message} key={message.id} />
        ))
      )}
    </div>
  );
};

export default ChatMessages;
