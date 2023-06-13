import React from "react";
import cl from './MyPage.module.scss'

const MyPage = ({ children, classNames, ...props }) => {
  return (
    <div className={classNames + " " + cl.myPage} {...props}>
      {children}
    </div>
  );
};

export default MyPage;
