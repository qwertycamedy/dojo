import React from "react";
import Posts from "../../../components/posts/Posts";
import { useSelector } from "react-redux";
import { postsSel } from "../../../redux/slices/posts/postsSlice";
import MySection from "../../../components/_UI/mySection/MySection";
import { authSel } from "../../../redux/slices/auth/authSlice";
import Search from "../../../components/search/Search";
import cl from "./ProfilePosts.module.scss";
import {
  profilePostFiltersSel,
  setSearchValue,
  setSortBy,
} from "../../../redux/slices/profile/profilePostFiltersSlice";
import Sort from "../../../components/sort/Sort";
import { FaSortAlphaUp, FaSortAlphaDown } from "react-icons/fa";

const ProfilePosts = () => {
  const { posts } = useSelector(postsSel);
  const { authUser } = useSelector(authSel);
  const { searchValue, sortBy, sortOptions } = useSelector(
    profilePostFiltersSel
  );

  const myPosts = posts.filter(post => post.author === authUser);
  const searchedPosts = myPosts.filter(
    post =>
      post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.date.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.text.toLowerCase().includes(searchValue.toLowerCase())
  );
  const sortedPosts = [...searchedPosts];

  if (sortBy === "asc") {
    sortedPosts.sort((a, b) => String(a.id).localeCompare(b.id));
  } else if (sortBy === "desc") {
    sortedPosts.sort((a, b) => String(b.id).localeCompare(a.id));
  }

  return (
    <MySection classNames={cl.outer}>
      <div className={cl.filters}>
        <Search
          placeholder={"Search some posts..."}
          setValue={setSearchValue}
        />
        <Sort options={sortOptions} sortBy={sortBy} setSortBy={setSortBy}>
          {sortBy === 'asc' ? (
            <FaSortAlphaUp />
          ) : (
            <FaSortAlphaDown />
          )}
        </Sort>
      </div>
      {sortedPosts.length ? (
        <Posts posts={sortedPosts} />
      ) : (
        <div className={cl.loading}>
          <h2 className=" title-2">:(</h2>
          <p>Идет загрузка постов либо посты не найдены</p>
        </div>
      )}
    </MySection>
  );
};

export default ProfilePosts;
