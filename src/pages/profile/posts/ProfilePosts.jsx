import React from "react";
import Posts from "../../../components/posts/Posts";
import { useSelector } from "react-redux";
import { profilePostsSel } from "../../../redux/slices/profile/profilePostsSlice";

const ProfilePosts = () => {
  const { posts } = useSelector(profilePostsSel);

  return <Posts posts={posts} />;
};

export default ProfilePosts;
