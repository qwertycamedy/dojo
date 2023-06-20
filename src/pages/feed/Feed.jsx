import React from "react";
import MyPage from "../../components/_UI/myPage/MyPage";
import FeedPosts from "./posts/FeedPosts";

const Feed = () => {
  return (
    <MyPage>
      <FeedPosts />
    </MyPage>
  );
};

export default Feed;
