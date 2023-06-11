import React from "react";
import Post from "./post/Post";
import cl from "./Posts.module.scss";
import PostSceleton from "./post/PostSceleton";

const Posts = ({ posts }) => {
  const successPosts = posts.map(post => <Post {...post} key={post.id} />);

  const sceletons = [...new Array(6)].map((_, i) => <PostSceleton key={i} />);

  return (
    <div className={cl.posts}>{posts.length ? successPosts : sceletons}</div>
  );
};

export default Posts;
