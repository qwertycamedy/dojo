import React from "react";
import MySection from "../../../components/_UI/mySection/MySection";
import cl from "./MessagesWindow.module.scss";
import MyInput from "../../../components/_UI/myInput/MyInput";
import MyBtn from "../../../components/_UI/myBtn/MyBtn";
import { LuSend } from "react-icons/lu";
import { useSelector } from "react-redux";
import { authSel } from "../../../redux/slices/auth/authSlice";
import clsx from "clsx";
import { messagesSel } from "../../../redux/slices/messages/messagesSlice";

const MessagesWindow = () => {
  const { messages } = useSelector(messagesSel);
  const { authUser } = useSelector(authSel);

  return (
    <MySection classNames={cl.window} containerCl={cl.container}>
      <div className={cl.messages}>
        {messages.map(({ myId, author, date, text }) => (
          <div
            className={clsx(cl.message, {
              [cl.notMe]: author.name !== authUser.name,
              [cl.me]: author.name === authUser.name,
            })}
            key={myId}
          >
            <p>{text}</p>
            <span className={cl.message_date}>{date}</span>
          </div>
        ))}
      </div>
      <div className={cl.fieldOuter}>
        <MyInput placeholder={"Type some..."} />
        <MyBtn classNames={cl.send}>
          <LuSend />
        </MyBtn>
      </div>
    </MySection>
  );
};

export default MessagesWindow;
