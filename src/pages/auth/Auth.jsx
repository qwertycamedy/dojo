import React from 'react'
import cl from './Auth.module.scss'
import MyPage from '../../components/_UI/myPage/MyPage'
import AuthInfo from './info/AuthInfo'
import SignIn from './signIn/SignIn'
import SignUp from './signUp/SignUp'

const Auth = () => {
  return (
    <MyPage classNames={cl.auth}>
        <AuthInfo />
        <SignIn />
        <SignUp />
    </MyPage>
  )
}

export default Auth