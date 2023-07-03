import React, { useEffect } from "react";
import cl from "./Header.module.scss";
import logoImg from "../../assets/img/img.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { headerSel, setTitle } from "../../redux/slices/header/headerSlice";
import { authSel } from "../../redux/slices/auth/authSlice";
import { loadStatus } from "../../redux/loadStatus";
import { dudeSel } from "../../redux/slices/dude/dudeSlice";

const Header = () => {
  const { title } = useSelector(headerSel);
  const { authUser, isAuth, authLoadStatus } = useSelector(authSel);
  const { dude } = useSelector(dudeSel);
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/") {
      dispatch(setTitle("FEED"));
    } else if (location.includes(`dude/`)) {
      dispatch(setTitle("DUDE"));
    } else {
      dispatch(setTitle(location.substring(1)));
    }
    if (!isAuth) {
      dispatch(setTitle("Not Auth"));
    }
    if (authLoadStatus === loadStatus.LOADING) {
      dispatch(setTitle("Loading"));
    }
  }, [dispatch, location, dude, isAuth, authLoadStatus]);

  const isProfile = ({ isActive }) =>
    isActive ? `${cl.profile} ${cl.profile_active}` : cl.profile;

  return (
    <header className={cl.header}>
      <div className="container">
        <div className={cl.inner}>
          <Link className={cl.logo} to="/">
            <img src={logoImg} alt="DOJO" />
          </Link>
          <h1 className={cl.title + " title-1"}>{title}</h1>
          <NavLink className={isProfile} to="/profile">
            {authUser.img ? (
              <img src={authUser.img} alt={authUser.nickname} />
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
