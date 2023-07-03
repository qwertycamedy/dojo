import React from "react";
import cl from './Chat.module.scss'
import ChatMessages from "./messages/ChatMessages";
import ChatField from "./field/ChatField";
import MyPage from "../../components/_UI/myPage/MyPage";
import MySection from "../../components/_UI/mySection/MySection";

const Chat = () => {
  return (
    <MyPage classNames={cl.page}>
      <MySection classNames={cl.section} containerCl={cl.container}>
        <ChatMessages />
        <ChatField />
      </MySection>
    </MyPage>
  );
};

export default Chat;
