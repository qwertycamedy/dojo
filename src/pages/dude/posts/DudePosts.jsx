import React, { useEffect } from "react";
import Posts from "../../../components/posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postsSel } from "../../../redux/slices/posts/postsSlice";
import MySection from "../../../components/_UI/mySection/MySection";
import Search from "../../../components/search/Search";
import cl from "./DudePosts.module.scss";
import Sort from "../../../components/sort/Sort";
import { FaSortAlphaUp, FaSortAlphaDown } from "react-icons/fa";
import MyNotFound from "../../../components/_UI/myNotFound/MyNotFound";
import { loadStatus } from "../../../redux/loadStatus";
import {
  setSearchValue,
  setSearchDebValue,
  setSortBy,
  filtersSel,
} from "../../../redux/slices/filters/filtersSlice";
import { dudeSel } from "../../../redux/slices/dude/dudeSlice";

const DudePosts = () => {
  const dispatch = useDispatch();
  const { dude } = useSelector(dudeSel);
  const { posts, postsLoadStatus } = useSelector(postsSel);
  const { searchValue, sortBy, sortOptions } = useSelector(filtersSel);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const dudePosts = posts?.filter(post => post.author.id === dude.id);

  return (
    <MySection classNames={cl.outer}>
      <div className={cl.filters}>
        <Search
          placeholder={"Search some posts..."}
          value={searchValue}
          setValue={setSearchValue}
          setDebValue={setSearchDebValue}
        />
        <Sort options={sortOptions} sortBy={sortBy} setSortBy={setSortBy}>
          {sortBy === "asc" ? <FaSortAlphaUp /> : <FaSortAlphaDown />}
        </Sort>
      </div>
      {postsLoadStatus === loadStatus.ERROR ? (
        <MyNotFound
          title={";("}
          text={"при получении постов произошла ошибка"}
        />
      ) : postsLoadStatus === loadStatus.LOADING ? (
        <Posts posts={[]} />
      ) : dudePosts?.length ? (
        <Posts posts={dudePosts} />
      ) : !dudePosts.length && (
        <MyNotFound title={":/"} text={"Дудь не создал ни одного поста"} />
      )  }
    </MySection>
  );
};

export default DudePosts;
