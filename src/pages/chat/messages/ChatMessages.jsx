import React from "react";
import cl from "./ChatMessages.module.scss";
import { useSelector } from "react-redux";
import { chatSel } from "../../../redux/slices/chat/chatSlice";
import ChatMessage from "./message/ChatMessage";
import { loadStatus } from "../../../redux/loadStatus";
import MyNotFound from "../../../components/_UI/myNotFound/MyNotFound";
import Loader from "../../../components/loader/Loader";

const ChatMessages = () => {
  const { messages, chatLoadStatus } = useSelector(chatSel);
  return (
    <div className={cl.messages}>
      {chatLoadStatus === loadStatus.LOADING ? (
        <Loader />
      ) : chatLoadStatus === loadStatus.ERROR ? (
        <MyNotFound
          title={":("}
          text={"При получении сообщений произошла ошибка"}
        />
      ) : !messages.length ? (
        <MyNotFound title={":D"} text={"Начни общение первым!"} />
      ) : (
        messages?.length &&
        messages.map(message => (
          <ChatMessage message={message} key={message.id} />
        ))
      )}
    </div>
  );
};

export default ChatMessages;
