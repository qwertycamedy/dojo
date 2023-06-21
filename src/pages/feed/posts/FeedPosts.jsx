import React, { useEffect } from "react";
import cl from "./FeedPosts.module.scss";
import MySection from "../../../components/_UI/mySection/MySection";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postsSel } from "../../../redux/slices/posts/postsSlice";
import { loadStatus } from "../../../redux/loadStatus";
import MyNotFound from "../../../components/_UI/myNotFound/MyNotFound";
import Posts from "../../../components/posts/Posts";
import Search from "../../../components/search/Search";
import { filtersSel,
  setSearchDebValue,
  setSearchValue, } from "../../../redux/slices/filters/filtersSlice";

const FeedPosts = () => {
  const { posts, postsLoadStatus } = useSelector(postsSel);
  const { searchValue, } = useSelector(filtersSel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <MySection>
      <div className={cl.filters}>
        <Search
          placeholder={"Search some posts..."}
          value={searchValue}
          setValue={setSearchValue}
          setDebValue={setSearchDebValue}
        />
      </div>
      {postsLoadStatus === loadStatus.ERROR ? (
        <MyNotFound
          title={";("}
          text={"при получении постов произошла ошибка"}
        />
      ) : postsLoadStatus === loadStatus.LOADING ? (
        <Posts posts={[]} />
      ) : (
        posts?.length && <Posts posts={posts} />
      )}
    </MySection>
  );
};

export default FeedPosts;
