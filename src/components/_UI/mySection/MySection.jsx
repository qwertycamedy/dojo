import React from "react";
import cl from './MySection.module.scss'

const MySection = ({ children, classNames, ...props }) => {
  return (
    <section className={classNames + " " + cl.mySection} {...props}>
      <div className="container">{children}</div>
    </section>
  );
};

export default MySection;
