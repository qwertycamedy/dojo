import React from "react";
import cl from './MyPage.module.scss'

const MyPage = ({ children, classNames, ...props }) => {
  return (
    <section className={classNames + " " + cl.myPage} {...props}>
      {children}
    </section>
  );
};

export default MyPage;
