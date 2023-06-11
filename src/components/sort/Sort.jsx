import React from "react";
import cl from "./Sort.module.scss";
import { useDispatch } from "react-redux";

const Sort = ({ children, options, sortBy, setSortBy, ...props }) => {
  const dispatch = useDispatch();
  return (
    <div className={cl.outer}>
      <select className={cl.sort} onChange={(e) => dispatch(setSortBy(e.target.value))} value={sortBy || 'Sort By'} {...props}>
        {options.map(option => (
          <option className={cl.option} value={option.value} key={option.value}>
            {option.body}
          </option>
        ))}
      </select>
      {children}
    </div>
  );
};

export default Sort;
