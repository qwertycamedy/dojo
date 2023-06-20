import React from "react";
import Post from "./post/Post";
import cl from "./Posts.module.scss";
import PostSceleton from "./post/PostSceleton";
import { useSelector } from "react-redux";
import { postsFiltersSel } from "../../redux/slices/posts/postsFiltersSlice";
import MyNotFound from "../_UI/myNotFound/MyNotFound";
import { postsSel } from "../../redux/slices/posts/postsSlice";
import { loadStatus } from "../../redux/loadStatus";

const Posts = ({ posts }) => {
  const { postsLoadStatus } = useSelector(postsSel);
  const { searchDebValue, sortBy } = useSelector(postsFiltersSel);

  const searchedPosts = posts?.filter(
    post =>
      post.author.name.toLowerCase().includes(searchDebValue.toLowerCase()) ||
      post.title.toLowerCase().includes(searchDebValue.toLowerCase()) ||
      post.date.toLowerCase().includes(searchDebValue.toLowerCase()) ||
      post.text.toLowerCase().includes(searchDebValue.toLowerCase())
  );

  const sortedPosts = searchedPosts && [...searchedPosts];

  if (sortBy === "asc") {
    sortedPosts?.sort((a, b) => String(a.myId).localeCompare(String(b.myId)));
  } else if (sortBy === "desc") {
    sortedPosts?.sort((a, b) => String(b.myId).localeCompare(String(a.myId)));
  }

  if (postsLoadStatus === loadStatus.SUCCESS && !sortedPosts.length) {
    return <MyNotFound title={":|"} text={"Посты не найдены"} />;
  }

  const successPosts = sortedPosts.map(post => (
    <Post {...post} key={post.myId} />
  ));

  const sceletons = [...new Array(6)].map((_, i) => <PostSceleton key={i} />);

  return (
    <div className={cl.posts}>{posts.length ? successPosts : sceletons}</div>
  );
};

export default Posts;
