import React from "react";
import Post from "./post/Post";
import cl from './Posts.module.scss'

const Posts = ({ posts }) => {
  return (
    <div className={cl.posts}>
      {posts.reverse().map(post => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
