import React from "react";
import cl from "./MyFileInput.module.scss";
import { useDispatch } from "react-redux";

const MyFileInput = ({ classNames, placeholder, setValue, ...props }) => {
  const dispatch = useDispatch();

  const handleFileChange = event => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = e => {
      const url = e.target.result;
      dispatch(setValue(url));
    };

    reader.readAsDataURL(file);
  };
  
  return (
    <input
      className={classNames + " " + cl.input}
      type="file"
      accept="image/*"
      onChange={handleFileChange}
      {...props}
    />
  );
};

export default MyFileInput;
