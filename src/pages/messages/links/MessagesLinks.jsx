import React from "react";
import { useSelector } from "react-redux";
import MessagesLink from "./link/MessagesLink";
import { messagesLinksSel } from "../../../redux/slices/messages/messagesLinksSlice";

const MessagesLinks = () => {
  const { messagesLinks } = useSelector(messagesLinksSel);
  return (
    <div>
      {messagesLinks.map(link => (
        <MessagesLink {...link} key={link.id} />
      ))}
      {
        console.log(messagesLinks)}
    </div>
  );
};

export default MessagesLinks;
