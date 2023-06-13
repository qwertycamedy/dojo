import React from 'react'
import MessagesLinks from './links/MessagesLinks'
import MyPage from '../../components/_UI/myPage/MyPage'
import cl from './Messages.module.scss'

const Messages = () => {
  return (
    <MyPage classNames={cl.page}>
      <MessagesLinks />
    </MyPage>
  )
}

export default Messages