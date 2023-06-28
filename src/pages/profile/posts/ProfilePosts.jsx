import React, { useEffect } from "react";
import Posts from "../../../components/posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postsSel } from "../../../redux/slices/posts/postsSlice";
import MySection from "../../../components/_UI/mySection/MySection";
import { authSel } from "../../../redux/slices/auth/authSlice";
import Search from "../../../components/search/Search";
import cl from "./ProfilePosts.module.scss";
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

const ProfilePosts = () => {
  const dispatch = useDispatch();
  const { posts, postsLoadStatus } = useSelector(postsSel);
  const { authUser } = useSelector(authSel);
  const { searchValue, sortBy, sortOptions } = useSelector(filtersSel);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const myPosts = posts?.filter(post => post.author.id === authUser.id);

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
      ) : myPosts?.length ? (
        <Posts posts={myPosts} />
      ) : (
        !myPosts.length && (
          <MyNotFound title={":/"} text={"Вы еще не создали ни одного поста"} />
        )
      )}
    </MySection>
  );
};

export default ProfilePosts;
