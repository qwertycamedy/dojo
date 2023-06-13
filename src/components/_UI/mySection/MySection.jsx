import React from "react";
import cl from './MySection.module.scss'

const MySection = ({ children, classNames, containerCl, ...props }) => {
  return (
    <section className={classNames + " " + cl.mySection} {...props}>
      <div className={containerCl + " container"}>{children}</div>
    </section>
  );
};

export default MySection;
