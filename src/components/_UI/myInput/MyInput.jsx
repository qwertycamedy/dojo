import React from "react";
import cl from "./MyInput.module.scss";
import { useDispatch } from "react-redux";

const MyInput = ({ classNames, placeholder, value, setValue, ...props }) => {
  const dispatch = useDispatch();
  return (
    <input
      className={classNames + " " + cl.input}
      placeholder={placeholder}
      value={value}
      onChange={e => dispatch(setValue(e.target.value))}
      {...props}
    />
  );
};

export default MyInput;
