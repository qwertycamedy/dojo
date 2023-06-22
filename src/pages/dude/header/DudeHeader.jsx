import React from "react";
import cl from "./DudeHeader.module.scss";
import MySection from "../../../components/_UI/mySection/MySection";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import MyBtn from "../../../components/_UI/myBtn/MyBtn";
import { AiOutlineMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import { dudeSel, setIsStatusShorted } from "../../../redux/slices/dude/dudeSlice";

const DudeHeader = () => {
  const dispatch = useDispatch();
  const {dude, isStatusShorted} = useSelector(dudeSel)

  const handleStatus = () => {
    dispatch(setIsStatusShorted(!isStatusShorted));
  };

  return (
    <MySection classNames={cl.header}>
      {dude.bg ? (
        <img className={cl.bg} src={dude.bg} alt="DOJO profile header bg" />
      ) : (
        <div className={cl.bg + " " + cl.bg_div}></div>
      )}
      <div className={cl.info}>
        {dude.img ? (
          <img className={cl.img} src={dude.img} alt="DOGO user img" />
        ) : (
          <FaUserCircle className={cl.img} />
        )}

        <h2 className={cl.name + " title-2"}>{dude.nickname}</h2>
        {dude.status && (
          <button
            className={clsx(cl.status, { [cl.status_more]: !isStatusShorted })}
            onClick={handleStatus}
          >
            {!isStatusShorted && dude.status.length > 100 ? (
              <span>{dude.status.substr(0, 100) + "..."}</span>
            ) : (
              <span>{dude.status}</span>
            )}
            <span>{isStatusShorted ? " Less" : " More"}</span>
          </button>
        )}

        <div className={cl.btns}>
          <Link to={`/messages/${dude.nickname}`}>
            <MyBtn classNames={cl.message}>
              <AiOutlineMessage />
            </MyBtn>
          </Link>
        </div>
      </div>
    </MySection>
  );
};

export default DudeHeader;
