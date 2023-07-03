import React from "react";
import cl from "./ChatMessage.module.scss";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { authSel } from "../../../../redux/slices/auth/authSlice";

const ChatMessage = ({ message }) => {
  const { authUser } = useSelector(authSel);
  const toDate = message.timestamp?.toDate();
  const formattedTimestamp = toDate?.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    separator: ".",
  });
  return (
    <div
      className={clsx(cl.message, {
        [cl.notMe]: message.author.id !== authUser.id,
        [cl.me]: message.author.id === authUser.id,
      })}
    >
      <p className={cl.name}>{message.author.nickname}</p>
      <p>{message.text}</p>
      <span className={cl.date}>{formattedTimestamp}</span>
    </div>
  );
};

export default ChatMessage;
