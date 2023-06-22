import React from "react";
import cl from "./Chat.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chat = ({ dude, lastMessage }) => {
  return (
    <Link className={cl.link} to={`/messages/${dude.nickname}`}>
      {dude.img ? (
        <img className={cl.img} src={dude.img} alt={dude.nickname} />
      ) : (
        <FaUserCircle className={cl.img} />
      )}
      <div className={cl.info}>
        <div className={cl.flex}>
          <h3 className={cl.name + " title-3"}>{dude.nickname}</h3>
          <span className={cl.date}>{lastMessage.date}</span>
        </div>
        <p className={cl.text}>{lastMessage.text}</p>
      </div>
    </Link>
  );
};

export default Chat;
