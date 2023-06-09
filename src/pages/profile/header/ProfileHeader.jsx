import React from "react";
import cl from "./ProfileHeader.module.scss";
import MySection from "../../../components/_UI/mySection/MySection";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import {
  profileHeaderSel,
  setIsStatusShorted,
} from "../../../redux/slices/profile/profileHeaderSlice";
import { authSel } from "../../../redux/slices/auth/authSlice";
import { FaUserCircle } from "react-icons/fa";
import { RiSettings2Fill } from "react-icons/ri";
import MyBtn from "../../../components/_UI/myBtn/MyBtn";
import { Link } from "react-router-dom";
import { setIsModalActive } from "../../../redux/slices/posts/postsSlice";

const ProfileHeader = () => {
  const dispatch = useDispatch();
  const { isStatusShorted } = useSelector(profileHeaderSel);
  const { isAuth } = useSelector(authSel);

  const handleStatus = () => {
    dispatch(setIsStatusShorted(!isStatusShorted));
  };

  const handleToggleCreate = () => {
    document.body.classList.add('overflow-h')
    dispatch(setIsModalActive(true));
  };

  return (
    <MySection classNames={cl.header}>
      {isAuth ? (
        <img className={cl.bg} src="" alt="DOJO profile header bg" />
      ) : (
        <div className={cl.bg + " " + cl.bg_div}></div>
      )}
      <div className={cl.info}>
        {isAuth ? (
          <img className={cl.img} src="" alt="DOGO user img" />
        ) : (
          <FaUserCircle className={cl.img} />
        )}

        <h2 className={cl.name + " title-2"}>Qwerty Camedy</h2>
        <button
          className={clsx(cl.status, { [cl.status_more]: !isStatusShorted })}
          onClick={handleStatus}
        >
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            cumque alias adipisci aperiam quae minus velit iure totam odio harum
            temporibus nulla mollitia natus, culpa illo beatae. Repellat, ipsum
            magni.
          </span>
          <span>{isStatusShorted ? " Less" : " More"}</span>
        </button>

        <div className={cl.btns}>
          <MyBtn classNames={cl.create} onClick={handleToggleCreate}>
            Create Post
          </MyBtn>
          <Link to="/settings">
            <MyBtn classNames={cl.settings}>
              <RiSettings2Fill />
            </MyBtn>
          </Link>
        </div>
      </div>
    </MySection>
  );
};

export default ProfileHeader;
