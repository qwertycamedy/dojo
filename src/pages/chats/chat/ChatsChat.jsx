import React from "react";
import cl from "./ChatsChat.module.scss";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const ChatsChat = ({ chat }) => {
  return (
    <Link className={cl.chat} to={`/chat/${chat.id}`}>
      {chat.img ? (
        <img className={cl.img} src={chat.img} alt={chat.nickname} />
      ) : (
        <FaUserCircle className={cl.img} />
      )}
      <h3 className={`${cl.name} title-3`}>{chat.nickname}</h3>
    </Link>
  );
};

export default ChatsChat;
