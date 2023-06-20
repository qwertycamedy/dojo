import React from "react";
import cl from "./ProfileHeader.module.scss";
import MySection from "../../../components/_UI/mySection/MySection";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import {
  profileHeaderSel,
  setIsStatusShorted,
} from "../../../redux/slices/profile/profileHeaderSlice";
import { authSel, signOutUser } from "../../../redux/slices/auth/authSlice";
import { FaUserCircle } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import MyBtn from "../../../components/_UI/myBtn/MyBtn";
import { setIsModalActive } from "../../../redux/slices/posts/postsSlice";
import { auth } from "../../../firebase";

const ProfileHeader = () => {
  const dispatch = useDispatch();
  const { isStatusShorted } = useSelector(profileHeaderSel);
  const { authUser } = useSelector(authSel);

  const handleStatus = () => {
    dispatch(setIsStatusShorted(!isStatusShorted));
  };

  const handleToggleCreate = () => {
    document.body.classList.add("overflow-h");
    dispatch(setIsModalActive(true));
  };

  const handleSignOutUser = () => {
    dispatch(signOutUser());
    auth.signOut();
  }

  return (
    <MySection classNames={cl.header}>
      {authUser.bg ? (
        <img className={cl.bg} src={authUser.bg} alt="DOJO profile header bg" />
      ) : (
        <div className={cl.bg + " " + cl.bg_div}></div>
      )}
      <div className={cl.info}>
        {authUser.img ? (
          <img className={cl.img} src={authUser.img} alt="DOGO user img" />
        ) : (
          <FaUserCircle className={cl.img} />
        )}

        <h2 className={cl.name + " title-2"}>{authUser.nickname}</h2>
        {authUser.status && (
          <button
            className={clsx(cl.status, { [cl.status_more]: !isStatusShorted })}
            onClick={handleStatus}
          >
            {!isStatusShorted && authUser.status.length > 100 ? (
              <span>{authUser.status.substr(0, 100) + "..."}</span>
            ) : (
              <span>{authUser.status}</span>
            )}
            <span>{isStatusShorted ? " Less" : " More"}</span>
          </button>
        )}

        <div className={cl.btns}>
          <MyBtn classNames={cl.create} onClick={handleToggleCreate}>
            Create Post
          </MyBtn>
            <MyBtn classNames={cl.settings} onClick={handleSignOutUser}>
              <GoSignOut />
            </MyBtn>
        </div>
      </div>
    </MySection>
  );
};

export default ProfileHeader;
