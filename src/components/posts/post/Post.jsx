import React, { useEffect, useState } from "react";
import { authSel } from "../../../redux/slices/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  FaUserCircle,
  FaHeart,
  /* FaCommentAlt */
} from "react-icons/fa";
import { BiSad } from "react-icons/bi";
import { FiLoader } from "react-icons/fi";
import cl from "./Post.module.scss";
import MyBtn from "../../_UI/myBtn/MyBtn";
import {
  deletePost,
  likeDec,
  likeInc,
  postsSel,
} from "../../../redux/slices/posts/postsSlice";
import clsx from "clsx";
import MyActionMenu from "../../_UI/myActionMenu/MyActionMenu";
import { loadStatus } from "../../../redux/loadStatus";

const Post = ({
  id,
  myId,
  author,
  date,
  title,
  img,
  text,
  likesCount,
  isLiked,
}) => {
  const { authUser } = useSelector(authSel);
  const { likesLoadStatus } = useSelector(postsSel);
  const dispatch = useDispatch();
  const [isLikesDis, setIsLikesDis] = useState(false);
  const [likesLoader, setLikesLoader] = useState("idle");

  const handleLike = id => {
    if (!isLiked) {
      dispatch(
        likeInc({
          id,
          myId,
          author,
          date,
          title,
          img,
          text,
          likesCount: likesCount + 1,
          isLiked: true,
        })
      );
    } else {
      dispatch(
        likeDec({
          id,
          myId,
          author,
          date,
          title,
          img,
          text,
          likesCount: likesCount - 1,
          isLiked: false,
        })
      );
    }
  };

  useEffect(() => {
    setLikesLoader(likesLoadStatus);
    if (
      likesLoader === loadStatus.LOADING ||
      likesLoader === loadStatus.ERROR
    ) {
      setIsLikesDis(true);
    } else {
      setIsLikesDis(false);
    }
  }, [likesLoadStatus, likesLoader]);

  const handleRemove = id => {
      dispatch(deletePost(id));
  };

  return (
    <div className={cl.post}>
      <div className={cl.header}>
        <div className={cl.user}>
          {author.img ? (
            <img className={cl.user_img} src={author.img} alt="DOGO user img" />
          ) : (
            <FaUserCircle className={cl.user_img} />
          )}
          <div className={cl.user_info}>
            <h3 className={cl.user_name + " title-3"}>{author.name}</h3>
            <p className={cl.user_date}>{date}</p>
          </div>
        </div>

        {authUser.nickname === author.name && (
          <MyActionMenu>
            <MyBtn onClick={() => handleRemove(id)}>Remove post</MyBtn>
          </MyActionMenu>
        )}
      </div>

      {title && <h3 className={cl.title + " title-3"}>{title}</h3>}

      {img && (
        <div className={cl.img_outer}>
          <img className={cl.img} src={img} alt={title || text} />
        </div>
      )}

      {text && <p className={cl.text}>{text}</p>}

      <div className={cl.footer}>
        <div className={cl.btns}>
          <MyBtn
            classNames={clsx(cl.like, {
              [cl.true]: isLiked,
              [cl.dis]: isLikesDis,
            })}
            onClick={() => handleLike(id)}
          >
            {likesLoader === loadStatus.LOADING ? (
              <FiLoader />
            ) : likesLoader === loadStatus.ERROR ? (
              <BiSad />
            ) : (
              <>
                <FaHeart />
                {likesCount > 10000 ? (
                  <span>10k+</span>
                ) : likesCount > 1000 ? (
                  <span>1k+</span>
                ) : likesCount > 0 ? (
                  <span>{likesCount}</span>
                ) : (
                  ""
                )}
              </>
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
