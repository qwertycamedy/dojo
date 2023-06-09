import React, { useEffect } from "react";
import cl from "./Header.module.scss";
import logoImg from "../../assets/img/img.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { headerSel, setTitle } from "../../redux/slices/header/headerSlice";

const Header = ({ user }) => {
  const { title } = useSelector(headerSel);
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/") {
      dispatch(setTitle("HOME"));
    } else {
      dispatch(setTitle(location.substring(1)));
    }
  }, [dispatch, location]);

  return (
    <header className={cl.header}>
      <div className="container">
        <div className={cl.header__inner}>
          <Link className={cl.header__logo} to="/">
            <img src={logoImg} alt="DOJO" />
          </Link>
          <h1 className={cl.header__title + " title-1"}>{title}</h1>
          <NavLink className={cl.header__profile} to="/profile">
            {user ? <img src={user.img} alt={user.name} /> : <FaUserCircle />}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
