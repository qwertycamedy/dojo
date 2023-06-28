import React from "react";
import cl from "./ChatField.module.scss";
import { LuSend } from "react-icons/lu";
import MyInput from "../../../components/_UI/myInput/MyInput";
import MyBtn from "../../../components/_UI/myBtn/MyBtn";

const ChatField = () => {
  return (
    <div className={cl.fieldOuter}>
      <MyInput placeholder={"Type some..."} />
      <MyBtn classNames={cl.send}>
        <LuSend />
      </MyBtn>
    </div>
  );
};

export default ChatField;
