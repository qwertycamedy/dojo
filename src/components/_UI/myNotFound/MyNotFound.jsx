import React from "react";
import cl from './MyNotFound.module.scss'

const MyNotFound = ({classNames, title, text}) => {
  return (
    <div className={classNames + ' ' + cl.outer}>
      <h2 className=" title-2">{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default MyNotFound;
