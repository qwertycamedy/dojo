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
  postsSel,
  toggleLike,
} from "../../../redux/slices/posts/postsSlice";
import clsx from "clsx";
import MyActionMenu from "../../_UI/myActionMenu/MyActionMenu";
import { loadStatus } from "../../../redux/loadStatus";
import { Link } from "react-router-dom";

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
    if (likesCount.includes(authUser.id)) {
      dispatch(
        toggleLike({
          id,
          myId,
          author,
          date,
          title,
          img,
          text,
          likesCount: [...likesCount.filter(item => item !== authUser.id)],
        })
      );
    } else {
      dispatch(
        toggleLike({
          id,
          myId,
          author,
          date,
          title,
          img,
          text,
          likesCount: [...likesCount, authUser.id],
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
        {authUser.id !== author.id ? (
          <Link className={cl.link} to={`dude/${author.name}`}>
            <div className={cl.user}>
              {author.img ? (
                <img
                  className={cl.user_img}
                  src={author.img}
                  alt="DOGO user img"
                />
              ) : (
                <FaUserCircle className={cl.user_img} />
              )}
              <div className={cl.user_info}>
                <h3 className={cl.user_name + " title-3"}>{author.name}</h3>
                <p className={cl.user_date}>{date}</p>
              </div>
            </div>
          </Link>
        ) : (
          <>
            <div className={cl.user}>
              {author.img ? (
                <img
                  className={cl.user_img}
                  src={author.img}
                  alt="DOGO user img"
                />
              ) : (
                <FaUserCircle className={cl.user_img} />
              )}
              <div className={cl.user_info}>
                <h3 className={cl.user_name + " title-3"}>{author.name}</h3>
                <p className={cl.user_date}>{date}</p>
              </div>
            </div>
            <MyActionMenu>
              <MyBtn onClick={() => handleRemove(id)}>Remove post</MyBtn>
            </MyActionMenu>
          </>
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
              [cl.true]: likesCount.includes(authUser.id),
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
                {likesCount.length > 10000 ? (
                  <span>10k+</span>
                ) : likesCount.length > 1000 ? (
                  <span>1k+</span>
                ) : likesCount.length > 0 ? (
                  <span>{likesCount.length}</span>
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
