import React from "react";
import cl from "./MyBtn.module.scss";

const MyBtn = ({ classNames, children, onClick, ...props }) => {
  return (
    <button className={classNames + " " + cl.btn} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default MyBtn;
