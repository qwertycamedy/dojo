import React, { useCallback } from "react";
import cl from "./Search.module.scss";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";

const Search = ({ classNames, placeholder, value, setValue, setDebValue }) => {
  const dispatch = useDispatch();

  const updateSearchValue = useCallback(
    debounce(str => dispatch(setDebValue(str)), 350),
    []
  );

  const onChange = e => {
    dispatch(setValue(e.target.value));
    updateSearchValue(e.target.value);
  };

  const onClear = () => {
    dispatch(setValue(""));
    dispatch(setDebValue(""));
  };

  return (
    <div className={cl.search + " " + classNames}>
      <input
        className={cl.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {value ? (
        <RxCross2 className={cl.icon} onClick={onClear} />
      ) : (
        <FiSearch className={cl.icon} />
      )}
    </div>
  );
};

export default Search;
