import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/messages">Messages</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </div>
  );
};

export default Navbar;
