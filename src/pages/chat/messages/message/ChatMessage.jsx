import React from "react";
import cl from "./ChatMessage.module.scss";
import { authSel } from "../../../../redux/slices/auth/authSlice";
import { useSelector } from "react-redux";
import clsx from "clsx";

const ChatMessage = ({ message }) => {
  const { authUser } = useSelector(authSel);

  return (
    <div
      className={clsx(cl.message, {
        [cl.notMe]: message.nickname !== authUser.nickname,
        [cl.me]: message.nickname === authUser.nickname,
      })}
      key={message.id}
    >
      <p>{message.text}</p>
      <span className={cl.message_date}>{message.date}</span>
    </div>
  );
};

export default ChatMessage;
