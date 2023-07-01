import React from "react";
import cl from "./ChatField.module.scss";
import { LuSend } from "react-icons/lu";
import MyInput from "../../../components/_UI/myInput/MyInput";
import MyBtn from "../../../components/_UI/myBtn/MyBtn";
import { useSelector } from "react-redux";
import { chatSel, setMesVal } from "../../../redux/slices/chat/chatSlice";

const ChatField = () => {
  const { mesVal } = useSelector(chatSel);

  const sendNewMes = () => {

  }

  return (
    <div className={cl.fieldOuter}>
      <MyInput placeholder={"Type some..."} value={mesVal} setValue={setMesVal} />
      <MyBtn classNames={cl.send} onClick={sendNewMes}>
        <LuSend />
      </MyBtn>
    </div>
  );
};

export default ChatField;
