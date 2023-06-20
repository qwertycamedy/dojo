import React, { useEffect } from "react";
import cl from "./Header.module.scss";
import logoImg from "../../assets/img/img.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { headerSel, setTitle } from "../../redux/slices/header/headerSlice";
import { authSel } from "../../redux/slices/auth/authSlice";
import { messagesLinksSel } from "../../redux/slices/messages/messagesLinksSlice";

const Header = () => {
  const { title } = useSelector(headerSel);
  const { authUser, isAuth } = useSelector(authSel);
  const { messagesLinks } = useSelector(messagesLinksSel);
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/") {
      dispatch(setTitle("HOME"));
    } else if (location.includes(`messages/`)) {
      const messagesLink = messagesLinks.find(
        obj => obj.id === parseInt(location.split("/").pop(), 10)
      );
      dispatch(setTitle(messagesLink.user.name.split(" ")[0]));
    } else {
      dispatch(setTitle(location.substring(1)));
    }
    if (!isAuth) {
      dispatch(setTitle("Not Auth"));
    }
  }, [dispatch, location, messagesLinks, isAuth]);

  return (
    <header className={cl.header}>
      <div className="container">
        <div className={cl.header__inner}>
          <Link className={cl.header__logo} to="/">
            <img src={logoImg} alt="DOJO" />
          </Link>
          <h1 className={cl.header__title + " title-1"}>{title}</h1>
          <NavLink className={cl.header__profile} to="/profile">
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
