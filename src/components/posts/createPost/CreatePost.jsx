import React from "react";
import cl from "./CreatePost.module.scss";
import MyModal from "../../_UI/myModal/MyModal";
import MyInput from "../../_UI/myInput/MyInput";
import MyTextarea from "../../_UI/myTextarea/MyTextarea";
import MyBtn from "../../_UI/myBtn/MyBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  setInputValue,
  setPhotoValue,
  setAreaValue,
  setIsModalActive,
  postsSel,
  submitNewPost,
} from "../../../redux/slices/posts/postsSlice";
import { authSel } from "../../../redux/slices/auth/authSlice";
import MyFileInput from "../../_UI/myFileInput/MyFileInput";
import {
  setSearchValue,
  setSearchDebValue,
  setSortBy,
} from "../../../redux/slices/posts/postsFiltersSlice";

const CreatePost = () => {
  const dispatch = useDispatch();
  const { posts, isModalActive, inputValue, photoValue, areaValue } =
    useSelector(postsSel);
  const { authUser } = useSelector(authSel);

  const handleCreate = async () => {
    const timestamp = new Date();
    const formattedTimestamp = timestamp.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      separator: ".",
    });

    const newPost = {
      myId: String(
        posts && posts.length < 9
          ? `0${Number(posts.length)}`
          : Number(posts.length)
      ),
      title: inputValue,
      img: photoValue,
      date: formattedTimestamp,
      text: areaValue,
      author: { name: authUser.nickname, img: authUser.img || "", id: authUser.id },
      likesCount: [],
    };

    if (inputValue || photoValue || areaValue) {
      document.body.classList.remove("overflow-h");
      await dispatch(submitNewPost(newPost));
      dispatch(setIsModalActive(false));
      dispatch(setSortBy("desc"));
      dispatch(setSearchValue(""));
      dispatch(setSearchDebValue(""));
      window.location.reload();
    }
  };

  return (
    <MyModal
      isActive={isModalActive}
      setIsActive={setIsModalActive}
      title={"Create Post"}
    >
      <div className={cl.inner}>
        <MyInput
          placeholder={"Type some title..."}
          value={inputValue}
          setValue={setInputValue}
        />
        <MyFileInput setValue={setPhotoValue} />
        <MyTextarea
          placeholder={"Type some text..."}
          value={areaValue}
          setValue={setAreaValue}
        />
        <MyBtn classNames={cl.btn} onClick={handleCreate}>
          Create
        </MyBtn>
      </div>
    </MyModal>
  );
};

export default CreatePost;
