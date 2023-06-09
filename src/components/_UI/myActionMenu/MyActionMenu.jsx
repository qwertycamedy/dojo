import React, { useState } from "react";
import MyBtn from "../myBtn/MyBtn";
import { HiOutlineDotsVertical } from "react-icons/hi";
import cl from "./MyActionMenu.module.scss";
import clsx from "clsx";

const MyActionMenu = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={cl.outer}>
      <MyBtn className={cl.btn} onClick={toggleActive}>
        {<HiOutlineDotsVertical />}
      </MyBtn>
      <div
        className={clsx(cl.modal, { [cl.active]: isActive })}
      >
        {children}
      </div>
      <div
        className={clsx(cl.overlay, { [cl.active]: isActive })}
        onClick={toggleActive}
      ></div>
    </div>
  );
};

export default MyActionMenu;
