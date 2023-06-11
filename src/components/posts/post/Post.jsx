import React from "react";
import { authSel } from "../../../redux/slices/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle, FaHeart /* FaCommentAlt */ } from "react-icons/fa";
import cl from "./Post.module.scss";
import MyBtn from "../../_UI/myBtn/MyBtn";
import {
  likeDec,
  likeInc,
  removePost,
} from "../../../redux/slices/posts/postsSlice";
import clsx from "clsx";
import MyActionMenu from "../../_UI/myActionMenu/MyActionMenu";

const Post = ({ id, author, date, title, img, text, likesCount, isLiked }) => {
  const { isAuth, authUser } = useSelector(authSel);
  const dispatch = useDispatch();

  const handleLike = id => {
    if (!isLiked) {
      dispatch(likeInc(id));
    } else {
      dispatch(likeDec(id));
    }
  };

  const handleRemove = id => {
    if (authUser === author) {
      dispatch(removePost(id));
    }
  };

  return (
    <div className={cl.post}>
      <div className={cl.header}>
        <div className={cl.user}>
          {isAuth ? (
            <img className={cl.user_img} src="" alt="DOGO user img" />
          ) : (
            <FaUserCircle className={cl.user_img} />
          )}
          <div className={cl.user_info}>
            <h3 className={cl.user_name + " title-3"}>{author}</h3>
            <p className={cl.user_date}>{date}</p>
          </div>
        </div>

        <MyActionMenu>
          <MyBtn onClick={() => handleRemove(id)}>
            Remove post
          </MyBtn>
        </MyActionMenu>
      </div>

      {title && <h3 className={cl.title + " title-3"}>{title}</h3>}

      {img && <img className={cl.img} src={img} alt={title || text} />}

      {text && <p className={cl.text}>{text}</p>}

      <div className={cl.footer}>
        <div className={cl.btns}>
          <MyBtn
            classNames={clsx(cl.like, { [cl.true]: isLiked })}
            onClick={() => handleLike(id)}
          >
            <FaHeart />
            {likesCount > 999 ? (
              <span>99+</span>
            ) : likesCount > 0 ? (
              <span>{likesCount}</span>
            ) : (
              ""
            )}
          </MyBtn>
          {/* <MyBtn classNames={cl.comment}>
            <FaCommentAlt />
            <span>200</span>
          </MyBtn> */}
        </div>
      </div>
    </div>
  );
};

export default Post;
