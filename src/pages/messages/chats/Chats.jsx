import React from "react";
import { useSelector } from "react-redux";
import Chat from "./chat/Chat";
import MySection from "../../../components/_UI/mySection/MySection";
import cl from "./Chats.module.scss";
import { messagesSel } from "../../../redux/slices/messages/messagesSlice";

const Chats = () => {
  const { chats } = useSelector(messagesSel);
  return (
    <MySection>
      <div className={cl.links}>
        {chats.map(link => (
          <Chat {...link} key={link.id} />
        ))}
      </div>
    </MySection>
  );
};

export default Chats;
