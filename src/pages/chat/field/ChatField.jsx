import React, { createRef } from "react";
import cl from "./ChatField.module.scss";
import MyInput from "../../../components/_UI/myInput/MyInput";
import { useDispatch, useSelector } from "react-redux";
import {
  chatSel,
  clearChatFieldVal,
  setChatFieldVal,
} from "../../../redux/slices/chat/chatSlice";
import MyBtn from "../../../components/_UI/myBtn/MyBtn";
import { LuSend } from "react-icons/lu";
import { authSel } from "../../../redux/slices/auth/authSlice";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";

const ChatField = ({scroll}) => {
  const dispatch = useDispatch();
  const { chatFieldVal } = useSelector(chatSel);
  const { authUser } = useSelector(authSel);
  const fieldRef = createRef();

  const sendNewMes = async () => {
    if (chatFieldVal === '') {
      return
    }
    const newMessage = {
      author: {
        nickname: authUser.nickname,
        id: authUser.id,
      },
      text: chatFieldVal,
      timestamp: serverTimestamp()
    }
    await addDoc(collection(db, 'messages'), newMessage)
    dispatch(clearChatFieldVal());
    scroll.current.scrollIntoView({behavior: 'smooth'})
  };

  const handleEnter = (e) => {
    if(e.keyCode === 13) {
      sendNewMes()
      fieldRef.current.blur();
    }
  }

  return (
    <div className={cl.outer}>
      <MyInput
        placeholder={"Type some..."}
        value={chatFieldVal}
        setValue={setChatFieldVal}
        onKeyDown={handleEnter}
        ref={fieldRef}
      />
      <MyBtn classNames={cl.send} onClick={sendNewMes}>
        <LuSend />
      </MyBtn>
    </div>
  );
};

export default ChatField;
