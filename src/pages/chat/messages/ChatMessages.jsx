import React from "react";
import cl from "./ChatMessages.module.scss";
import ChatMessage from "./message/ChatMessage";

const ChatMessages = () => {
  const messages = [
    {
      id: "1lkjfasdf24ga",
      nickname: "SunMary",
      date: "06/21/2023, 06:45",
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Architecto eius molestiae accusamus quos facilis accusantium veniam, 
      esse sapiente quidem omnis culpa ratione voluptas dicta et 
      reiciendis nobis laborum ex odio.`,
    },
    {
      id: "asdfasfwe2322",
      nickname: "Qwerty Camedy",
      date: "06/21/2023, 06:58",
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Architecto eius`,
    },
  ];

  return (
    <div className={cl.messages}>
      {messages.map(message => (
        <ChatMessage message={message} key={message.id} />
      ))}
    </div>
  );
};

export default ChatMessages;
