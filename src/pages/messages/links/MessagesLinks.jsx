import React from "react";
import { useSelector } from "react-redux";
import MessagesLink from "./link/MessagesLink";
import { messagesLinksSel } from "../../../redux/slices/messages/messagesLinksSlice";
import MySection from "../../../components/_UI/mySection/MySection";
import cl from "./MessagesLinks.module.scss";

const MessagesLinks = () => {
  const { messagesLinks } = useSelector(messagesLinksSel);
  return (
    <MySection>
      <div className={cl.links}>
        {messagesLinks.map(link => (
          <MessagesLink {...link} key={link.id} />
        ))}
      </div>
    </MySection>
  );
};

export default MessagesLinks;
