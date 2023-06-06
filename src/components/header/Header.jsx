import React from "react";
import cl from "./Header.module.scss";
import logoImg from "../../assets/img/img.svg";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = ({ user }) => {
  return (
    <header className={cl.header}>
      <div className="container">
        <div className={cl.header__inner}>
          <Link className={cl.header__logo} to="/">
            <img src={logoImg} alt="DOJO" />
          </Link>
          <h1 className={cl.header__title}>HOME</h1>
          <NavLink className={cl.header__profile} to="/profile">
            {user ? <img src={user.img} alt={user.name} /> : <FaUserCircle />}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
