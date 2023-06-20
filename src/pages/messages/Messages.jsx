import React from 'react'
import Chats from './chats/Chats'
import MyPage from '../../components/_UI/myPage/MyPage'
import cl from './Messages.module.scss'

const Messages = () => {
  return (
    <MyPage classNames={cl.page}>
      <Chats />
    </MyPage>
  )
}

export default Messages