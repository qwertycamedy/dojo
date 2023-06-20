import React, { useEffect } from "react";
import cl from "./Header.module.scss";
import logoImg from "../../assets/img/img.svg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { headerSel, setTitle } from "../../redux/slices/header/headerSlice";
import { authSel } from "../../redux/slices/auth/authSlice";
import MyBtn from "../_UI/myBtn/MyBtn";
import { messagesSel } from "../../redux/slices/messages/messagesSlice";
import { loadStatus } from "../../redux/loadStatus";

const Header = () => {
  const { title } = useSelector(headerSel);
  const { authUser, isAuth, authLoadStatus } = useSelector(authSel);
  const { chats } = useSelector(messagesSel);
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (location === "/") {
      dispatch(setTitle("FEED"));
    } else if (location.includes(`messages/`)) {
      const messagesLink = chats.find(
        obj => obj.id === parseInt(location.split("/").pop(), 10)
      );
      dispatch(setTitle(messagesLink.user.name.split(" ")[0]));
    } else {
      dispatch(setTitle(location.substring(1)));
    }
    if (!isAuth) {
      dispatch(setTitle("Not Auth"));
    }
    if(authLoadStatus === loadStatus.LOADING) {
      dispatch(setTitle('Loading'))
    }
  }, [dispatch, location, chats, isAuth, authLoadStatus]);

  return (
    <header className={cl.header}>
      <div className="container">
        <div className={cl.inner}>
          {!location.includes("messages/") ? (
            <Link className={cl.logo} to="/">
              <img src={logoImg} alt="DOJO" />
            </Link>
          ) : (
            <MyBtn classNames={cl.back} onClick={() => navigate(-1)}>
              <IoChevronBack />
            </MyBtn>
          )}
          <h1 className={cl.title + " title-1"}>{title}</h1>
          <NavLink className={cl.profile} to="/profile">
            {authUser.img ? (
              <img src={authUser.img} alt={authUser.name} />
            ) : (
              <FaUserCircle />
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
