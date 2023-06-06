import React from 'react'
import MessagesLinks from './links/MessagesLinks'
import MessagesWindow from './window/MessagesWindow'
import MyPage from '../../components/myPage/MyPage'

const Messages = () => {
  return (
    <MyPage>
      <MessagesLinks />
      <MessagesWindow />
    </MyPage>
  )
}

export default Messages