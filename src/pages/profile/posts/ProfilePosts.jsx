import React from "react";
import Posts from "../../../components/posts/Posts";
import { useSelector } from "react-redux";
import { postsSel } from "../../../redux/slices/posts/postsSlice";
import MySection from "../../../components/_UI/mySection/MySection";
import { authSel } from "../../../redux/slices/auth/authSlice";

const ProfilePosts = () => {
  const { posts } = useSelector(postsSel);
  const { authUser } = useSelector(authSel);

  const filteredPosts = posts.filter(post => post.author === authUser)

  return (
    <MySection>
      <Posts posts={filteredPosts} />
    </MySection>
  );
};

export default ProfilePosts;
