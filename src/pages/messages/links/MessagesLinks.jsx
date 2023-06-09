import React from "react";
import { useSelector } from "react-redux";
import MessagesLink from "./link/MessagesLink";
import { messagesLinksSel } from "../../../redux/slices/messages/messagesLinksSlice";
import MySection from "../../../components/_UI/mySection/MySection";

const MessagesLinks = () => {
  const { messagesLinks } = useSelector(messagesLinksSel);
  return (
    <MySection>
      {messagesLinks.map(link => (
        <MessagesLink {...link} key={link.id} />
      ))}
      {
        console.log(messagesLinks)}
    </MySection>
  );
};

export default MessagesLinks;
