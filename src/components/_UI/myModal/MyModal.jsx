import React, { useEffect } from "react";
import cl from "./MyModal.module.scss";
import clsx from "clsx";
import MyBtn from "../myBtn/MyBtn";
import { CgClose } from "react-icons/cg";
import { useDispatch } from "react-redux";

const MyModal = ({ title, isActive, setIsActive, children }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    document.addEventListener('keydown', onEscDown)
    return () => document.removeEventListener('keydown', onEscDown)
  });

  const onEscDown = e => {
    if (e.key === "Escape") {
      document.body.classList.remove("overflow-h");
      dispatch(setIsActive(false));
    }
  };

  const handleClose = () => {
    document.body.classList.remove("overflow-h");
    dispatch(setIsActive(false));
  };
  return (
    <div
      className={clsx(cl.overlay, { [cl.active]: isActive })}
      onClick={handleClose}
      onKeyDown={onEscDown}
    >
      <div className={cl.modal} onClick={e => e.stopPropagation()}>
        <div className={cl.header}>
          <h2 className={cl.title + " title-2"}>{title}</h2>
          <MyBtn classNames={cl.close} onClick={handleClose}>
            <CgClose />
          </MyBtn>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
