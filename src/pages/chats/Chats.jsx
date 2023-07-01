import React, { useEffect } from "react";
import cl from "./Chats.module.scss";
import ChatsChat from "./chat/ChatsChat";
import MyPage from "../../components/_UI/myPage/MyPage";
import MySection from "../../components/_UI/mySection/MySection";
import { useDispatch, useSelector } from "react-redux";
import { chatsSel, fetchChats } from "../../redux/slices/chats/chatsSlice";
import { loadStatus } from "../../redux/loadStatus";
import MyNotFound from "../../components/_UI/myNotFound/MyNotFound";
import Loader from "../../components/loader/Loader";

const Chats = () => {
  const dispatch = useDispatch();
  const { chats, chatsLoadStatus } = useSelector(chatsSel);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  return (
    <MyPage classNames={cl.chats}>
      <MySection classNames={cl.section} containerCl={cl.container}>
        <div className={cl.inner}>
          {chatsLoadStatus === loadStatus.LOADING ? (
            <Loader />
          ) : chatsLoadStatus === loadStatus.ERROR ? (
            <MyNotFound title={":<"} text={"Не удалось получить сообщения"} />
          ) : chats?.length ? (
            chats.map(chat => <ChatsChat chat={chat} key={chat.id} />)
          ) : (
            !chats.length && (
              <MyNotFound
                title={":)"}
                text={"Нет чатов, пообщайтесь с кем-нибудь"}
              />
            )
          )}
        </div>
      </MySection>
    </MyPage>
  );
};

export default Chats;
