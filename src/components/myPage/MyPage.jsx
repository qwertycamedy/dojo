import React from "react";
import cl from './MyPage.module.scss'

const MyPage = ({ children, classNames, ...props }) => {
  return (
    <section className={classNames + " " + cl.myPage} {...props}>
      <div className="container">{children}</div>
    </section>
  );
};

export default MyPage;
