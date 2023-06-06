import React from "react";
import Post from "./post/Post";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
