import React from "react";
import cl from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={cl.outer}>
      <div className={cl.lds_ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
