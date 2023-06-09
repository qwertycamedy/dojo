import React from 'react'
import ProfileHeader from './header/ProfileHeader'
import ProfilePosts from './posts/ProfilePosts'
import MyPage from '../../components/_UI/myPage/MyPage'
import CreatePost from '../../components/posts/createPost/CreatePost'

const Profile = () => {
  return (
    <MyPage>
        <ProfileHeader />
        <ProfilePosts />
        <CreatePost />
    </MyPage>
  )
}

export default Profile