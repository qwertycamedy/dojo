import React from "react";
import cl from "./MessagesLink.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const MessagesLink = ({ id, user, lastMessage }) => {
  return (
    <Link className={cl.link} to={`/messages/${id}`}>
      {user.img ? (
        <img className={cl.img} src={user.img} alt={user.name} />
      ) : (
        <FaUserCircle className={cl.img} />
      )}
      <div className={cl.info}>
        <div className={cl.flex}>
          <h3 className={cl.name + " title-3"}>{user.name}</h3>
          <span className={cl.date}>{lastMessage.date}</span>
        </div>
        <p className={cl.text}>{lastMessage.text}</p>
      </div>
    </Link>
  );
};

export default MessagesLink;
