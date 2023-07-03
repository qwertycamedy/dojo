import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Navbar.module.scss";
import { FaUserCircle, FaUserFriends } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { CgFeed } from "react-icons/cg";

const Navbar = () => {
  const isActive = ({ isActive }) =>
    isActive ? `${cl.menu_link} ${cl.menu_link_active}` : cl.menu_link;

  return (
    <div className={cl.navbar}>
      <div className="container">
        <nav className={cl.inner}>
          <ul className={cl.menu}>
            <li className={cl.menu_item}>
              <NavLink className={isActive} to="/">
                <CgFeed />
              </NavLink>
            </li>
            <li className={cl.menu_item}>
              <NavLink className={isActive} to="/chat">
                <BsChatLeftTextFill />
              </NavLink>
            </li>
            <li className={cl.menu_item}>
              <NavLink className={isActive} to="/dudes">
                <FaUserFriends />
              </NavLink>
            </li>
            <li className={cl.menu_item}>
              <NavLink className={isActive} to="/profile">
                <FaUserCircle />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
