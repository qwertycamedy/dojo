import React from "react";
import cl from "./DudesDude.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import MyBtn from "../../../components/_UI/myBtn/MyBtn";
import { AiOutlineMessage } from "react-icons/ai";

const DudesDude = ({ dude }) => {
  return (
    <div className={cl.dude}>
      <Link className={cl.info} to={`/dudes/${dude.nickname}`}>
        {dude.img ? (
          <img className={cl.img} src={dude.img} alt={dude.nickname} />
        ) : (
          <FaUserCircle className={cl.img} />
        )}
        <h3 className={`${cl.name} title-3`}>{dude.nickname}</h3>
      </Link>
      <MyBtn classNames={cl.message}>
        <AiOutlineMessage />
      </MyBtn>
    </div>
  );
};

export default DudesDude;
