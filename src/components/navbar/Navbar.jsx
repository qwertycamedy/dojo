import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={cl.navbar}>
      <div className="container">
        <nav className={cl.inner}>
        <ul className={cl.menu}>
          <li className={cl.menu_item}>
            <NavLink className={cl.menu_link} to="/">
              Feed
            </NavLink>
          </li>
          <li className={cl.menu_item}>
            <NavLink className={cl.menu_link} to="/dudes">
              Dudes
            </NavLink>
          </li>
          <li className={cl.menu_item}>
            <NavLink className={cl.menu_link} to="/profile">
              Profile
            </NavLink>
          </li>
        </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
