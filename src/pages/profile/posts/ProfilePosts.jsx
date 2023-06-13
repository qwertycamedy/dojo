import React, { useEffect } from "react";
import Posts from "../../../components/posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  loadStatus,
  postsSel,
} from "../../../redux/slices/posts/postsSlice";
import MySection from "../../../components/_UI/mySection/MySection";
import { authSel } from "../../../redux/slices/auth/authSlice";
import Search from "../../../components/search/Search";
import cl from "./ProfilePosts.module.scss";
import {
  profilePostFiltersSel,
  setSearchValue,
  setSearchDebValue,
  setSortBy,
} from "../../../redux/slices/profile/profilePostFiltersSlice";
import Sort from "../../../components/sort/Sort";
import { FaSortAlphaUp, FaSortAlphaDown } from "react-icons/fa";
import MyNotFound from "../../../components/_UI/myNotFound/MyNotFound";

const ProfilePosts = () => {
  const dispatch = useDispatch();
  const { posts, postsLoadStatus } = useSelector(postsSel);
  const { authUser } = useSelector(authSel);
  const { searchValue, searchDebValue, sortBy, sortOptions } = useSelector(
    profilePostFiltersSel
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const myPosts = posts?.filter(post => post.author.name === authUser.name);
  const searchedPosts = myPosts?.filter(
    post =>
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
      ) : sortedPosts?.length ? (
        <Posts posts={sortedPosts} />
      ) : (
        <MyNotFound
          title={":|"}
          text={"Идет загрузка постов либо посты не найдены"}
        />
      )}
    </MySection>
  );
};

export default ProfilePosts;
