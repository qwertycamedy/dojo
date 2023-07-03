import React from "react";
import cl from "./ChatMessage.module.scss";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { authSel } from "../../../../redux/slices/auth/authSlice";

const ChatMessage = ({ message }) => {
  const { authUser } = useSelector(authSel);
  return (
    <div
      className={clsx(cl.message, {
        [cl.notMe]: message.author.nickname !== authUser.nickname,
        [cl.me]: message.author.nickname === authUser.nickname,
      })}
      key={message.id}
    >
      <p className={cl.name}>{message.author.nickname}</p>
      <p>{message.text}</p>
      <span className={cl.date}>{message.date}</span>
    </div>
  );
};

export default ChatMessage;
