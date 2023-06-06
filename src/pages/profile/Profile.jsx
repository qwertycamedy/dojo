import React from 'react'
import MyPage from '../../components/myPage/MyPage'
import ProfileHeader from './header/ProfileHeader'
import ProfilePosts from './posts/ProfilePosts'

const Profile = () => {
  return (
    <MyPage>
        <ProfileHeader />
        <ProfilePosts />
    </MyPage>
  )
}

export default Profile