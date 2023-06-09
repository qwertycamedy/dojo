import React from "react";
import cl from "./MyTextarea.module.scss";
import { useDispatch } from "react-redux";

const MyTextarea = ({ classNames, placeholder, value, setValue, ...props }) => {
  const dispatch = useDispatch();
  return (
    <textarea
      className={classNames + " " + cl.textarea}
      placeholder={placeholder}
      value={value}
      onChange={e => dispatch(setValue(e.target.value))}
      {...props}
    ></textarea>
  );
};

export default MyTextarea;
