import React, { useCallback, useState } from "react";
import cl from "./Search.module.scss";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";

const Search = ({ classNames, placeholder, setValue }) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const updateSearchValue = useCallback(
    debounce(str => dispatch(setValue(str)), 350),
    []
  );

  const onChange = e => {
    setInputValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const onClear = () => {
    setInputValue("");
    dispatch(setValue(""));
  };

  return (
    <div className={cl.search + " " + classNames}>
      <input
        className={cl.input}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
      />
      {inputValue ? (
        <RxCross2 className={cl.icon} onClick={onClear} />
      ) : (
        <FiSearch className={cl.icon} />
      )}
    </div>
  );
};

export default Search;
