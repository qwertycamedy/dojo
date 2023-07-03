import React, { forwardRef } from "react";
import cl from "./MyInput.module.scss";
import { useDispatch } from "react-redux";

const MyInput = forwardRef(
  ({ classNames, placeholder, value, setValue, ...props }, ref) => {
    const dispatch = useDispatch();
    return (
      <input
        className={classNames + " " + cl.input}
        placeholder={placeholder}
        value={value}
        onChange={e => dispatch(setValue(e.target.value))}
        ref={ref}
        {...props}
      />
    );
  }
);

export default MyInput;
