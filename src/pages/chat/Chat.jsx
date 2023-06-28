import React from "react";
import cl from "./Chat.module.scss";
import MyPage from "../../components/_UI/myPage/MyPage";
import MySection from "../../components/_UI/mySection/MySection";
import ChatMessages from "./messages/ChatMessages";
import ChatField from "./field/ChatField";

const Chat = () => {
  return (
    <MyPage classNames={cl.window}>
      <MySection classNames={cl.window} containerCl={cl.container}>
        <ChatMessages />
        <ChatField />
      </MySection>
    </MyPage>
  );
};

export default Chat;
